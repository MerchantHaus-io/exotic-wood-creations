"""Generate the Exotic Wood Depot redesign proposal PDF with Merchant Haus branding."""
from reportlab.lib.pagesizes import LETTER
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.lib.colors import HexColor, white, black
from reportlab.lib.enums import TA_LEFT, TA_CENTER
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle,
    ListFlowable, ListItem, PageBreak, Flowable, KeepTogether,
)
from reportlab.pdfgen import canvas
from reportlab.graphics.shapes import Drawing, Path, String, Group
from reportlab.graphics import renderPDF

GOLD = HexColor("#C89B5A")
DARK = HexColor("#1A1A1A")
MUTED = HexColor("#555555")
LIGHT_BG = HexColor("#F7F3EC")
SHIELD_RED = HexColor("#B02020")
SHIELD_DARK = HexColor("#6E1414")


class MerchantHausLogo(Flowable):
    """Red shield with white # and MERCHANT HAUS wordmark, matching the brand."""

    def __init__(self, width=3.2 * inch, height=0.65 * inch):
        super().__init__()
        self.width = width
        self.height = height

    def wrap(self, availWidth, availHeight):
        return self.width, self.height

    def _shield_path(self, c, x0, y0, w, h):
        """Classic escutcheon: flat top, curved sides, pointed bottom."""
        path = c.beginPath()
        path.moveTo(x0, y0 + h)
        path.lineTo(x0 + w, y0 + h)
        path.lineTo(x0 + w, y0 + h * 0.45)
        path.curveTo(
            x0 + w, y0 + h * 0.28,
            x0 + w * 0.92, y0 + h * 0.14,
            x0 + w * 0.5, y0,
        )
        path.curveTo(
            x0 + w * 0.08, y0 + h * 0.14,
            x0, y0 + h * 0.28,
            x0, y0 + h * 0.45,
        )
        path.close()
        return path

    def draw(self):
        c = self.canv
        shield_h = self.height
        shield_w = shield_h * 0.85

        c.saveState()

        # Dark shield border
        path = self._shield_path(c, 0, 0, shield_w, shield_h)
        c.setFillColor(SHIELD_DARK)
        c.setStrokeColor(SHIELD_DARK)
        c.setLineWidth(1)
        c.drawPath(path, fill=1, stroke=1)

        # Inner red shield
        inset = 0.055 * shield_h
        path2 = self._shield_path(
            c, inset, inset, shield_w - 2 * inset, shield_h - 2 * inset,
        )
        c.setFillColor(SHIELD_RED)
        c.setStrokeColor(SHIELD_RED)
        c.drawPath(path2, fill=1, stroke=1)

        # White hash mark (#) centered in the shield
        c.setFillColor(white)
        c.setFont("Helvetica-Bold", shield_h * 0.52)
        c.drawCentredString(shield_w / 2, shield_h * 0.38, "#")

        c.restoreState()

        # Wordmark
        text_x = shield_w + 0.18 * inch
        c.setFillColor(black)
        c.setFont("Helvetica-Bold", shield_h * 0.44)
        c.drawString(text_x, shield_h * 0.32, "MERCHANT HAUS")


class GoldRule(Flowable):
    def __init__(self, width, thickness=1.2, color=GOLD):
        super().__init__()
        self.width = width
        self.thickness = thickness
        self.color = color

    def wrap(self, availWidth, availHeight):
        return self.width, self.thickness

    def draw(self):
        self.canv.setStrokeColor(self.color)
        self.canv.setLineWidth(self.thickness)
        self.canv.line(0, 0, self.width, 0)


def footer(canvas_obj, doc):
    canvas_obj.saveState()
    canvas_obj.setFillColor(MUTED)
    canvas_obj.setFont("Helvetica", 8)
    canvas_obj.drawString(
        0.75 * inch, 0.5 * inch,
        "Merchant Haus  —  Web Design & Development"
    )
    canvas_obj.drawRightString(
        LETTER[0] - 0.75 * inch, 0.5 * inch,
        f"Page {doc.page}"
    )
    canvas_obj.setStrokeColor(GOLD)
    canvas_obj.setLineWidth(0.6)
    canvas_obj.line(0.75 * inch, 0.72 * inch, LETTER[0] - 0.75 * inch, 0.72 * inch)
    canvas_obj.restoreState()


def build_pdf(path):
    doc = SimpleDocTemplate(
        path,
        pagesize=LETTER,
        leftMargin=0.75 * inch,
        rightMargin=0.75 * inch,
        topMargin=0.6 * inch,
        bottomMargin=0.85 * inch,
        title="Exotic Wood Depot — Website Redesign Proposal",
        author="Merchant Haus",
    )

    styles = getSampleStyleSheet()
    h1 = ParagraphStyle(
        "h1", parent=styles["Heading1"], fontName="Helvetica-Bold",
        fontSize=22, leading=26, textColor=DARK, spaceAfter=4, spaceBefore=0,
    )
    subtitle = ParagraphStyle(
        "subtitle", parent=styles["Normal"], fontName="Helvetica",
        fontSize=11, leading=14, textColor=MUTED, spaceAfter=14,
    )
    h2 = ParagraphStyle(
        "h2", parent=styles["Heading2"], fontName="Helvetica-Bold",
        fontSize=14, leading=18, textColor=GOLD, spaceBefore=14, spaceAfter=6,
    )
    h3 = ParagraphStyle(
        "h3", parent=styles["Heading3"], fontName="Helvetica-Bold",
        fontSize=11, leading=14, textColor=DARK, spaceBefore=8, spaceAfter=2,
    )
    body = ParagraphStyle(
        "body", parent=styles["Normal"], fontName="Helvetica",
        fontSize=10, leading=14, textColor=DARK, spaceAfter=4,
    )
    bullet = ParagraphStyle(
        "bullet", parent=body, leftIndent=14, bulletIndent=2, spaceAfter=2,
    )
    price_big = ParagraphStyle(
        "price_big", parent=body, fontName="Helvetica-Bold",
        fontSize=24, leading=28, textColor=DARK, alignment=TA_CENTER, spaceAfter=4,
    )
    price_sub = ParagraphStyle(
        "price_sub", parent=body, fontName="Helvetica",
        fontSize=10, leading=13, textColor=MUTED, alignment=TA_CENTER,
    )

    story = []

    # Header: Logo + rule
    story.append(MerchantHausLogo(width=3.0 * inch, height=0.6 * inch))
    story.append(Spacer(1, 10))
    story.append(GoldRule(LETTER[0] - 1.5 * inch))
    story.append(Spacer(1, 18))

    # Title
    story.append(Paragraph("Website Redesign Proposal", h1))
    story.append(Paragraph(
        "Prepared for <b>Exotic Wood Depot LLC</b> &nbsp;|&nbsp; "
        "316 N. Parramore Ave, Orlando, FL 32801",
        subtitle,
    ))

    # Intro
    story.append(Paragraph("Overview", h2))
    story.append(Paragraph(
        "Merchant Haus has put together a complete redesign concept for the Exotic Wood Depot "
        "website. The goal: a faster, modern site that ranks higher on Google, converts more "
        "visitors into buyers, and reflects the quality of the handcrafted work coming out of the "
        "Parramore Ave shop. Below is a full breakdown of what the prototype already delivers, "
        "everything added when put into full production, and the ongoing service terms.",
        body,
    ))

    # Prototype upgrades
    story.append(Paragraph("What the Prototype Delivers Today", h2))

    story.append(Paragraph("Modern Design &amp; Branding", h3))
    for item in [
        "Custom dark theme with gold accents that matches the premium feel of the wood",
        "Animated tree-logo hero with the \"Since 2018\" heritage line up front",
        "Playfair Display + DM Sans typography — reads like a high-end furniture brand",
    ]:
        story.append(Paragraph("•&nbsp;&nbsp;" + item, bullet))

    story.append(Paragraph("Homepage", h3))
    for item in [
        "Featured tables grid with prices visible at a glance ($3,400 – $11,000)",
        "Available slabs section for raw-wood buyers",
        "Past projects gallery showing real customer installations",
        "FOX 35 \"Love for Logs\" news segment embedded — built-in credibility",
        "\"From Costa Rica to Your Home\" origin story",
    ]:
        story.append(Paragraph("•&nbsp;&nbsp;" + item, bullet))

    story.append(Paragraph("Navigation &amp; Pages", h3))
    for item in [
        "Clean URLs: Home, Tables, Slabs, Gallery, Contact",
        "Dedicated Tables, Slabs, and full Gallery pages",
        "Custom 404 page that keeps visitors on the site",
    ]:
        story.append(Paragraph("•&nbsp;&nbsp;" + item, bullet))

    story.append(Paragraph("Contact Page", h3))
    for item in [
        "Click-to-call buttons for Graham and Marcus",
        "One-tap email link",
        "Embedded Google Map of the Parramore Ave shop",
        "Hours, Facebook, and Instagram in one place",
        "Real Google customer reviews with \"See all reviews\" link",
    ]:
        story.append(Paragraph("•&nbsp;&nbsp;" + item, bullet))

    story.append(Paragraph("Performance", h3))
    for item in [
        "Loads 2–4× faster than the current Wix site",
        "Optimized AVIF images — sharper with smaller file sizes",
        "Fully responsive on phone, tablet, and desktop",
        "Server-side rendering so Google sees fully-formed pages",
    ]:
        story.append(Paragraph("•&nbsp;&nbsp;" + item, bullet))

    story.append(Paragraph("SEO Foundation (Already Built In)", h3))
    for item in [
        "Proper page title and meta description on every page",
        "Open Graph + Twitter Card tags for rich link previews (Facebook, iMessage, texts)",
        "Semantic HTML for accessibility and search ranking",
        "Preconnected fonts for faster first paint",
    ]:
        story.append(Paragraph("•&nbsp;&nbsp;" + item, bullet))

    # Production upgrades
    story.append(Paragraph("Added in Full Production", h2))

    story.append(Paragraph("Advanced SEO — Ranking on Google", h3))
    for item in [
        "sitemap.xml and robots.txt for faster, more complete indexing",
        "LocalBusiness schema → shop appears in Google Maps with hours, phone, and rating",
        "Product schema on every table and slab → eligible for Google Shopping with price + photo",
        "Review / AggregateRating schema → gold stars next to search results",
        "Per-product detail pages with individual URLs (e.g. /tables/guanacaste-parota-8-5ft) — each table becomes its own Google-findable page",
        "Alt text on every image for image-search traffic",
        "Canonical URLs and per-page social share images",
        "Google Search Console + Analytics setup and monitoring",
    ]:
        story.append(Paragraph("•&nbsp;&nbsp;" + item, bullet))

    story.append(Paragraph("Conversion Features", h3))
    for item in [
        "Contact / quote-request form that emails directly to you",
        "\"Request a Quote\" button on every product",
        "Sticky call button on mobile",
        "Newsletter signup for new-slab-arrival announcements",
    ]:
        story.append(Paragraph("•&nbsp;&nbsp;" + item, bullet))

    story.append(Paragraph("Content Expansion", h3))
    for item in [
        "About / Our Story page with the full Costa Rica narrative",
        "Wood-education blog posts (\"What is Guanacaste Parota?\", \"Caring for a live-edge table\") to capture long-tail search traffic",
        "FAQ page with FAQ schema (answers show expandable directly in Google results)",
        "Video testimonials section when available",
    ]:
        story.append(Paragraph("•&nbsp;&nbsp;" + item, bullet))

    story.append(Paragraph("Domain &amp; Migration", h3))
    for item in [
        "Connect existing domain to the new site",
        "301 redirects from old Wix URLs so Google ranking is preserved",
        "SSL / HTTPS properly configured",
        "Google Business Profile synced with matching Name/Address/Phone",
    ]:
        story.append(Paragraph("•&nbsp;&nbsp;" + item, bullet))

    story.append(Paragraph("Reliability &amp; Operations", h3))
    for item in [
        "Uptime monitoring",
        "Automated daily backups",
        "Fast global hosting (CDN) — same speed for any visitor, anywhere",
        "Ongoing security updates",
    ]:
        story.append(Paragraph("•&nbsp;&nbsp;" + item, bullet))

    story.append(Paragraph("Accessibility Polish", h3))
    for item in [
        "Keyboard navigation throughout",
        "Reduced-motion support for users who prefer it",
        "WCAG contrast compliance",
    ]:
        story.append(Paragraph("•&nbsp;&nbsp;" + item, bullet))

    story.append(Spacer(1, 18))

    # Pricing box
    story.append(Paragraph("Service &amp; Pricing", h2))

    price_inner = [
        [Paragraph("$299 / month", price_big)],
        [Paragraph("All-inclusive hosting, maintenance &amp; ongoing SEO", price_sub)],
    ]
    price_table = Table(price_inner, colWidths=[LETTER[0] - 1.5 * inch])
    price_table.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), LIGHT_BG),
        ("BOX", (0, 0), (-1, -1), 1, GOLD),
        ("TOPPADDING", (0, 0), (-1, -1), 16),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 16),
        ("LEFTPADDING", (0, 0), (-1, -1), 16),
        ("RIGHTPADDING", (0, 0), (-1, -1), 16),
    ]))
    story.append(price_table)
    story.append(Spacer(1, 10))

    story.append(Paragraph("<b>Monthly plan includes:</b>", body))
    for item in [
        "Everything listed above — fully hosted and maintained",
        "<b>1 hour of updates per month included free</b> — copy changes, layout tweaks, new sections, SEO adjustments, etc.",
        "SSL, hosting, backups, and uptime monitoring",
        "Ongoing SEO and structured-data upkeep",
    ]:
        story.append(Paragraph("•&nbsp;&nbsp;" + item, bullet))

    story.append(Spacer(1, 6))
    story.append(Paragraph(
        "<b>Additional changes on request:</b> $25 / hour",
        body,
    ))
    story.append(Spacer(1, 6))
    story.append(Paragraph(
        "<b>Products &amp; photos:</b> yours to manage. You'll have the ability to add, update, "
        "or mark items as sold whenever you'd like, at your discretion. No charge for doing that "
        "yourselves — managing inventory and images is not included in the hourly rate.",
        body,
    ))

    story.append(Spacer(1, 20))
    story.append(GoldRule(LETTER[0] - 1.5 * inch))
    story.append(Spacer(1, 10))
    story.append(Paragraph(
        "Ready to move forward, or have questions? Reply to this proposal and we'll schedule a "
        "15-minute walkthrough of the live prototype.",
        body,
    ))

    doc.build(story, onFirstPage=footer, onLaterPages=footer)


if __name__ == "__main__":
    import os
    out = os.path.join(os.path.dirname(__file__), "Exotic_Wood_Depot_Proposal.pdf")
    build_pdf(out)
    print(f"Generated: {out}")
