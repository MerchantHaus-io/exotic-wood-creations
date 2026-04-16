export interface Product {
  id: string;
  name: string;
  price?: number;
  sold?: boolean;
  category: "table" | "slab" | "past-project";
  image: string;
  images?: string[];
  description?: string;
  dimensions?: string;
  woodType?: string;
  slug: string;
}

function wixImg(id: string, ext = "jpg"): string {
  return `https://static.wixstatic.com/media/${id}.${ext}/v1/fill/w_800,h_1000,al_c,q_80,enc_avif,quality_auto/${id}.${ext}`;
}

function wixImgMv2(id: string): string {
  return `https://static.wixstatic.com/media/${id}~mv2.jpg/v1/fill/w_800,h_1000,al_c,q_80,enc_avif,quality_auto/${id}~mv2.jpg`;
}

export const tables: Product[] = [
  {
    id: "t1",
    name: "Guanacaste Parota Table 8.5ft",
    price: 6700,
    category: "table",
    image: wixImgMv2("04833c_581b1c63fa674f2286e643a31c399437"),
    images: [
      wixImgMv2("04833c_581b1c63fa674f2286e643a31c399437"),
      wixImgMv2("04833c_6f8e1060dac345cea9f27d1959864ee8"),
      wixImgMv2("04833c_ce0e25e83c484719b4b74641fb76de4c"),
    ],
    description: "This table was hand crafted and is ready to put legs on and enjoy in your home.",
    woodType: "Guanacaste Parota",
    slug: "gauacaste-parota-table-ready-for-legs-of-your-choice-8-5ft",
  },
  {
    id: "t2",
    name: "Guanacaste Parota Live Edge Desk",
    price: 3400,
    category: "table",
    image: wixImgMv2("04833c_07caa4346d6a4f17bc05d4557b033237"),
    woodType: "Guanacaste Parota",
    slug: "guanacaste-parota-live-edge-desk",
  },
  {
    id: "t3",
    name: "Brazilian Cedar Dining Table",
    price: 6500,
    category: "table",
    image: wixImgMv2("04833c_9858758fe49a4d7d9b5f71edd863172c"),
    woodType: "Brazilian Cedar",
    slug: "brazilian-cedar-dining-table",
  },
  {
    id: "t4",
    name: 'Monkeypod Epoxy River Table "Cat\'s Eye"',
    price: 11000,
    category: "table",
    image: wixImgMv2("04833c_80a7ad79dcc444b49afb5da2433d1f0e"),
    images: [
      wixImgMv2("04833c_80a7ad79dcc444b49afb5da2433d1f0e"),
      wixImgMv2("04833c_292cb2fe4b81456d9c398a5d8c84b777"),
      wixImgMv2("04833c_ce0695b2fbb048788164d21a8ca9219b"),
    ],
    description: 'This AMAZING project clocks in at a whopping 65" wide by 105" long! The perfect statement piece for any home or business.',
    woodType: "Monkeypod",
    slug: "monkeypod-epoxy-river-table-cat-s-eye",
  },
  {
    id: "t5",
    name: "Guanacaste Parota Coffee Table",
    sold: true,
    category: "table",
    image: wixImgMv2("04833c_732f7f749dd343f59c64fe80612fee94"),
    woodType: "Guanacaste Parota",
    slug: "guanacaste-parota-coffee-table",
  },
  {
    id: "t6",
    name: "Spalted Maple Dining Table",
    sold: true,
    category: "table",
    image: wixImgMv2("04833c_9359f6d3c16748cd8c4e3a66409ad150"),
    woodType: "Spalted Maple",
    slug: "spalted-maple-dining-table",
  },
  {
    id: "t7",
    name: "Monkeypod Desk",
    sold: true,
    category: "table",
    image: wixImgMv2("04833c_87b639e620514edaa61219b336ce34f6"),
    woodType: "Monkeypod",
    slug: "monkeypod-desk",
  },
];

export const slabs: Product[] = [
  {
    id: "s1", name: '#74 Guanacaste Parota Slab', dimensions: '121"x39"x2.5"', category: "slab",
    image: wixImgMv2("04833c_4d8a51a59850485694c9c1c4d8b9b6de"), woodType: "Guanacaste Parota",
    slug: "74-guanacaste-parota-slab-121-x39-x2-5",
  },
  {
    id: "s2", name: '#73 Guanacaste Parota Slab', dimensions: '142"x39"x2.5"', category: "slab",
    image: wixImgMv2("04833c_94fea61a1b1b4adf9edbcf7e99d3fa69"), woodType: "Guanacaste Parota",
    slug: "73-guanacaste-parota-slab-142-x39-x2-5",
  },
  {
    id: "s3", name: '#69 Guanacaste Parota Slab', dimensions: '114"x44"x2"', category: "slab",
    image: wixImgMv2("04833c_6377fd7d040a47469c68e129073d6bfa"), woodType: "Guanacaste Parota",
    slug: "69-guanacaste-parota-slab-114-x44-x2",
  },
  {
    id: "s4", name: '#68 Guanacaste Parota Slab', dimensions: '115"x46"x2"', category: "slab",
    image: wixImgMv2("04833c_c7418885a91b4ae2a7c8543300609fd6"), woodType: "Guanacaste Parota",
    slug: "68-guanacaste-parota-slab-115-x46-x2",
  },
  {
    id: "s5", name: '#67 Guanacaste Parota Slab', dimensions: '115"x51"x2"', category: "slab",
    image: wixImgMv2("04833c_302b28baead54173bf6639dbe8b310a8"), woodType: "Guanacaste Parota",
    slug: "67-guanacaste-parota-slab-115-x51-x2",
  },
  {
    id: "s6", name: '#66 Guanacaste Parota Slab', dimensions: '117"x51"x2"', category: "slab",
    image: wixImgMv2("04833c_f8c96b9abe0849778123574cd3fd34d5"), woodType: "Guanacaste Parota",
    slug: "66-guanacaste-parota-slab-117-x51-x2",
  },
  {
    id: "s7", name: '#22 Monkeypod Slab', dimensions: '126"x48"x2.5"', category: "slab",
    image: wixImgMv2("04833c_627ff0e9335b485595191e4f801d0827"), woodType: "Monkeypod",
    slug: "22-monkeypod-slab-126-x48-x2-5",
  },
  {
    id: "s8", name: '#46 Monkeypod Slab', dimensions: '142"x39"x2"', category: "slab",
    image: wixImgMv2("04833c_2a25b685e1974d059f4ae5c53a717674"), woodType: "Monkeypod",
    slug: "46-monkeypod-142-x39-x2",
  },
  {
    id: "s9", name: '#36 Guanacaste Parota Slab', dimensions: '96"x44"x2"', category: "slab",
    image: wixImgMv2("04833c_6a480bdb5dfe4b339f40d600ccfee3e9"), woodType: "Guanacaste Parota",
    slug: "36-monkeypod-78-x35-x2",
  },
  {
    id: "s10", name: '#35 Monkeypod Slab', dimensions: '121"x45"x2.5"', category: "slab",
    image: wixImgMv2("04833c_6f392b9c36384d58ac4abd81ccf58e02"), woodType: "Monkeypod",
    slug: "35-monkeypod-82-x46-x3",
  },
  {
    id: "s11", name: '#33 Monkeypod Slab', dimensions: '145"x38"x2"', category: "slab",
    image: wixImgMv2("04833c_141b27dcae154c5ea4d299e93b0b4bc9"), woodType: "Monkeypod",
    slug: "33-monkeypod-145-x38-x2",
  },
  {
    id: "s12", name: '#26 Monkeypod Slab', dimensions: '135"x40"x5"', category: "slab",
    image: wixImgMv2("04833c_b30d9d073a634c30823ac057ee69c83c"), woodType: "Monkeypod",
    slug: "26-monkeypod-135-x40-x5",
  },
  {
    id: "s13", name: '#25 Guanacaste Parota Slab', dimensions: '103"x38"x2"', category: "slab",
    image: wixImgMv2("04833c_2ebfacb451a94e3d81fcdae89512d662"), woodType: "Guanacaste Parota",
    slug: "25-monkeypod-77-x42-x2",
  },
  {
    id: "s14", name: '#63 Monkeypod Slab', dimensions: '109"x43"x2.5"', category: "slab",
    image: wixImgMv2("04833c_5b147aef1f934bbcaa2aa3247355e4d0"), woodType: "Monkeypod",
    slug: "63-monkeypod-109-x43-x2-5",
  },
  {
    id: "s15", name: '#62 Guanacaste Parota Slab', dimensions: '134"x49"x2.5"', category: "slab",
    image: wixImgMv2("04833c_e93573ed286e4677879fd58ee376906e"), woodType: "Guanacaste Parota",
    slug: "62-monkeypod-125-x30-x2",
  },
  {
    id: "s16", name: '#60 Monkeypod Slab', dimensions: '134"x44"x2.5"', category: "slab",
    image: wixImgMv2("04833c_ad3686c7628e4d7984acd156368aeaec"), woodType: "Monkeypod",
    slug: "60-monkeypod-141-x36-x2",
  },
  {
    id: "s17", name: '#72 Monkeypod Drip Slab', dimensions: '84"x32"x2.5"', category: "slab",
    image: wixImgMv2("04833c_a5fdfc65850343ee9673f3b50c53524b"), woodType: "Monkeypod",
    slug: "59-monkeypod-148-x26-x2",
  },
  {
    id: "s18", name: '#71 Monkeypod Slab', dimensions: '142"x36"x2.5"', category: "slab",
    image: wixImgMv2("04833c_4e1f74d1a7b3465f84c22028f248fa8a"), woodType: "Monkeypod",
    slug: "54-monkeypod-149-x33-x2",
  },
  {
    id: "s19", name: '#70 Monkeypod Slab', dimensions: '138"x31"x2.5"', category: "slab",
    image: wixImgMv2("04833c_0a7a81e53dc746588819a21add799b3c"), woodType: "Monkeypod",
    slug: "49r-monkeypod-round-65-x55-x3",
  },
  {
    id: "s20", name: '#48 Guanacaste Parota Slab', dimensions: '117"x52"x2.5"', category: "slab",
    image: wixImgMv2("04833c_7157dbef50c844cf8e66751ef7184ed3"), woodType: "Guanacaste Parota",
    slug: "48-monkeypod-139-x39-x2",
  },
  {
    id: "s21", name: '#5 Pachote Slab', dimensions: '156"x42"x2.5"', category: "slab",
    image: wixImgMv2("04833c_2c409a3a1b7648b8a0a44b55d9167633"), woodType: "Pachote",
    slug: "5-pachote-156-x42-x2-5",
  },
  {
    id: "s22", name: '#3 Monkeypod Burl Slab', dimensions: '114"x37"x2"', category: "slab",
    image: wixImgMv2("04833c_fd3d4b1653f84e0f9f317234ae1b08f6"), woodType: "Monkeypod",
    slug: "3-monkeypod-142-x48-x2",
  },
  {
    id: "s23", name: '#2 Monkeypod Burl Slab', dimensions: '112"x32"x2"', category: "slab",
    image: wixImgMv2("04833c_8ef31f4666bd46a9b98b9fb2e58a11ab"), woodType: "Monkeypod",
    slug: "2-monkeypod-140-x33-x2",
  },
  {
    id: "s24", name: '#30 Monkeypod Slab', dimensions: '142"x38"x2"', category: "slab",
    image: wixImgMv2("04833c_3155b6c4b8d0400d816602b15859d1ed"), woodType: "Monkeypod",
    slug: "30-monkeypod-142-x38-x2",
  },
  {
    id: "s25", name: '#29 Monkeypod Slab', dimensions: '126"x43"x2.5"', category: "slab",
    image: wixImgMv2("04833c_63ebe30deca14c20af64733c67b7490c"), woodType: "Monkeypod",
    slug: "29-monkeypod-143-x42-x2",
  },
  {
    id: "s26", name: '#37 Guanacaste Parota Slab', dimensions: '120"x44"x2.5"', category: "slab",
    image: wixImgMv2("04833c_b16b00128e8d4416b5e953258f5bd433"), woodType: "Guanacaste Parota",
    slug: "37-guanacaste-parota-116-x37-x1-75",
  },
  {
    id: "s27", name: '#52 Monkeypod Slab', dimensions: '127"x44"x2.5"', category: "slab",
    image: wixImgMv2("04833c_5b10cd8e3dc840b9ac012d05460b6956"), woodType: "Monkeypod",
    slug: "52-monkeypod-round-48-x50-x2-5",
  },
  {
    id: "s28", name: '#54 Guanacaste Parota Slab', dimensions: '110"x50"x2.5"', category: "slab",
    image: wixImgMv2("04833c_cd48e45823b84e30b7cfdef9f63332c2"), woodType: "Guanacaste Parota",
    slug: "54-monkeypod-67-x33-x2",
  },
  {
    id: "s29", name: '#13 Monkeypod Slab', dimensions: '90"x50.5"x2.5"', category: "slab",
    image: wixImgMv2("04833c_621544a3dd1c46759575fcc47a1083cb"), woodType: "Monkeypod",
    slug: "12-137-x54-x2-25-monkeypod",
  },
];

export const pastProjects: Product[] = [
  {
    id: "p1", name: "Guanacaste Parota 9ft River", category: "past-project",
    image: wixImgMv2("04833c_d01bd6ec26ad43249f151b4c3f708d71"),
    slug: "guanacaste-parota-9ft-river",
  },
  {
    id: "p2", name: "Guanacaste Parota 9ft", category: "past-project",
    image: wixImgMv2("04833c_0ce1f0d86bda49ceb91215720482aea3"),
    slug: "guanacaste-parota-9ft",
  },
  {
    id: "p3", name: "Kitchen Island Bliss", category: "past-project",
    image: wixImgMv2("04833c_2de3cc6084594230a8b63b527b190db1"),
    slug: "did-someone-say-kitchen-island-bliss",
  },
  {
    id: "p4", name: "Guanacaste Parota 10ft", category: "past-project",
    image: wixImgMv2("04833c_32736737ef314dbcab7e5ac215caf492"),
    slug: "guanacaste-parota-10ft",
  },
  {
    id: "p5", name: "River Table", category: "past-project",
    image: wixImgMv2("04833c_4bab9490013842beaecfef4ee57fa068"),
    slug: "river-table",
  },
  {
    id: "p6", name: "Guanacaste Parota 8ft", category: "past-project",
    image: wixImgMv2("04833c_bc9a44df96cc48b098e61081ef5e5a33"),
    slug: "guanacaste-parota-8ft",
  },
  {
    id: "p7", name: "Guanacaste Parota 8ft With Bench", category: "past-project",
    image: wixImgMv2("04833c_94cf0ee8617b4da1ac304f82df9dd00e"),
    slug: "guanacaste-parota-8ft-with-bench",
  },
  {
    id: "p8", name: "Guanacaste Parota 9ft with Wood Legs", category: "past-project",
    image: wixImgMv2("04833c_8258b43731c24488828b1dff0863610e"),
    slug: "guanacosta-parota-9ft-with-wood-legs",
  },
  {
    id: "p9", name: "Bowties Are Cool", category: "past-project",
    image: wixImgMv2("04833c_4921f7361d6d457da7b08692392d4262"),
    slug: "bowties-are-cool-1",
  },
  {
    id: "p10", name: "Guanacaste Parota Dining Table", category: "past-project",
    image: "https://static.wixstatic.com/media/04833c_a82b496b71c149ada001b5a1398f2a7ff002.jpg/v1/fill/w_800,h_1000,al_c,q_80,enc_avif,quality_auto/04833c_a82b496b71c149ada001b5a1398f2a7ff002.jpg",
    slug: "guanacaste-parota-dinning-table",
  },
  {
    id: "p11", name: "6 Person Live Edge Monkeypod Table", category: "past-project",
    image: wixImgMv2("04833c_75298d5cd9d1497da77f88f5aeb06ab9"),
    slug: "beautiful-6-person-live-edge-monkeypod-dinning-table",
  },
  {
    id: "p12", name: "Clear Epoxy Accent Dining Table", category: "past-project",
    image: "https://static.wixstatic.com/media/04833c_39c8a7b582bd4673a907d58cf338e84b~mv2.jpeg/v1/fill/w_800,h_1000,al_c,q_80,enc_avif,quality_auto/04833c_39c8a7b582bd4673a907d58cf338e84b~mv2.jpeg",
    slug: "clear-epoxy-accent-dinning-table",
  },
  {
    id: "p13", name: "Timburi Dining Table Black Epoxy", category: "past-project",
    image: wixImgMv2("04833c_7aa4dd67133341e18f3aa68049d8ee80"),
    slug: "timburi-dining-table-black-epoxy",
  },
  {
    id: "p14", name: "Monkeypod Dining Table Epoxy River", category: "past-project",
    image: wixImgMv2("04833c_c19b67d58b7548888667d03346a99f25"),
    slug: "monkeypod-dinning-table-epoxy-river",
  },
  {
    id: "p15", name: "Lightning Struck Monkeypod Waterfall Bar", category: "past-project",
    image: wixImgMv2("04833c_cdd7875089714ef1a8f26fda8eabc0ef"),
    slug: "lighting-struck-monkeypod-waterfall-bar",
  },
  {
    id: "p16", name: "56x70 Monkeypod River Table", category: "past-project",
    image: wixImgMv2("04833c_23b76d6992e14a54856fd8018c21cd30"),
    slug: "56x70-monkeypod-river-table",
  },
  {
    id: "p17", name: "Exotic Wood Waterfall Table", category: "past-project",
    image: wixImgMv2("04833c_d9d037bc698048dd8a70e52213cdad1e"),
    slug: "exotic-wood-waterfall-table",
  },
  {
    id: "p18", name: "Epoxy River Coffee Table", category: "past-project",
    image: "https://static.wixstatic.com/media/04833c_784513afd97e4ca4a65363993c605daf~mv2.jpeg/v1/fill/w_800,h_1000,al_c,q_80,enc_avif,quality_auto/04833c_784513afd97e4ca4a65363993c605daf~mv2.jpeg",
    slug: "epoxy-river-coffee-table",
  },
];

export const allProducts = [...tables, ...slabs, ...pastProjects];
