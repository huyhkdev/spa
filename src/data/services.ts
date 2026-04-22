import type { Service } from '../types';

export const services: Service[] = [
  {
    id: '1',
    name: 'Gội Đầu Thảo Dược',
    nameEn: 'Herbal Hair Wash',
    nameKo: '허브 헤어 워시',
    description: 'Massage đầu & gội đầu với thảo dược thiên nhiên',
    descriptionEn: 'Head massage & hair wash with natural herbs',
    descriptionKo: '천연 허브로 헤드 마사지 및 헤어 워시',
    image: '/images/service-hair-1.jpg',
    category: 'hair',
    duration: 30,
    price: 150000
  },
  {
    id: '2',
    name: 'Gội Đầu Dưỡng Sinh Cung Đình',
    nameEn: 'Imperial Wellness Hair Treatment',
    nameKo: '황실 웰니스 헤어 트리트먼트',
    description: 'Massage cổ vai gáy, chăm sóc da mặt cơ bản & gội đầu thảo dược',
    descriptionEn: 'Neck & shoulder massage, basic facial care & herbal hair wash',
    descriptionKo: '목과 어깨 마사지, 기본 페이셜 케어 및 허브 헤어 워시',
    image: '/images/service-hair-2.jpg',
    category: 'hair',
    duration: 70,
    price: 299000
  },
  {
    id: '3',
    name: 'Massage Chân',
    nameEn: 'Foot Massage',
    nameKo: '발 마사지',
    description: 'Massage chân bằng tinh dầu thảo dược',
    descriptionEn: 'Foot massage with herbal essential oils',
    descriptionKo: '허브 에센셜 오일로 발 마사지',
    image: '/images/service-foot.jpg',
    category: 'massage',
    duration: 30,
    price: 225000,
    variants: [
      { duration: 30, price: 225000 },
      { duration: 60, price: 399000 }
    ]
  },
  {
    id: '4',
    name: 'Vietnam Massage Body',
    nameEn: 'Vietnam Body Massage',
    nameKo: '베트남 바디 마사지',
    description: 'Massage toàn thân bằng tinh dầu thảo dược hoặc đá ấm Bazan',
    descriptionEn: 'Full body massage with herbal oils or warm Bazan stones',
    descriptionKo: '허브 오일 또는 따뜻한 바잔 스톤으로 전신 마사지',
    image: '/images/service-body.jpg',
    category: 'massage',
    duration: 60,
    price: 450000,
    variants: [
      { duration: 60, price: 450000 },
      { duration: 90, price: 650000 }
    ]
  },
  {
    id: '5',
    name: 'Chăm Sóc Da Chuyên Sâu',
    nameEn: 'Intensive Skin Care',
    nameKo: '집중 스킨 케어',
    description: 'Tẩy trang, rửa mặt, tẩy tế bào chết, massage mặt, đắp mặt nạ, điện di tinh chất',
    descriptionEn: 'Cleansing, face wash, exfoliation, facial massage, mask, serum electroporation',
    descriptionKo: '클렌징, 세안, 각질 제거, 얼굴 마사지, 마스크, 세럼 전기영동',
    image: '/images/service-skincare.jpg',
    category: 'skincare',
    duration: 60,
    price: 450000
  },
  {
    id: '6',
    name: 'Tẩy Ủ Dưỡng Body',
    nameEn: 'Body Scrub & Nourishment',
    nameKo: '바디 스크럽 및 영양 공급',
    description: 'Tẩy ủ dưỡng toàn thân cà phê và mật ong hoặc bột đậu đỏ và sữa tươi',
    descriptionEn: 'Full body scrub with coffee & honey or red bean powder & fresh milk',
    descriptionKo: '커피와 꿀 또는 팥가루와 신선한 우유로 전신 스크럽',
    image: '/images/service-body-scrub.jpg',
    category: 'skincare',
    duration: 60,
    price: 399000
  },
  {
    id: '7',
    name: 'Trị Liệu Cổ Vai Gáy',
    nameEn: 'Neck & Shoulder Therapy',
    nameKo: '목과 어깨 치료',
    description: 'Cạo gió sừng ngà, massage ấn huyệt, điện di máy ngũ hành, đắp cao thảo dược',
    descriptionEn: 'Gua Sha, acupressure massage, five elements therapy, herbal compress',
    descriptionKo: '괄사, 지압 마사지, 오행 요법, 허브 찜질',
    image: '/images/service-therapy-1.jpg',
    category: 'massage',
    duration: 60,
    price: 450000
  },
  {
    id: '8',
    name: 'Trị Liệu Lưng',
    nameEn: 'Back Therapy',
    nameKo: '등 치료',
    description: 'Cạo gió sừng ngà, massage ấn huyệt lưng/cổ vai gáy, điện di máy ngũ hành, đắp cao thảo dược',
    descriptionEn: 'Gua Sha, acupressure for back/neck/shoulder, five elements therapy, herbal compress',
    descriptionKo: '괄사, 등/목/어깨 지압, 오행 요법, 허브 찜질',
    image: '/images/service-therapy-2.jpg',
    category: 'massage',
    duration: 60,
    price: 450000
  },
  {
    id: '9',
    name: 'Massage Thái',
    nameEn: 'Thai Massage',
    nameKo: '타이 마사지',
    description: 'Massage ấn huyệt, giãn cơ bằng cao thảo dược, không tinh dầu',
    descriptionEn: 'Acupressure massage, muscle stretching with herbal balm, no oil',
    descriptionKo: '지압 마사지, 허브 밤으로 근육 스트레칭, 오일 없음',
    image: '/images/service-thai.jpg',
    category: 'massage',
    duration: 70,
    price: 650000
  },
  {
    id: '10',
    name: 'Lam An Signature Massage',
    nameEn: 'Lam An Signature Massage',
    nameKo: 'Lam An 시그니처 마사지',
    description: 'Massage toàn thân kết hợp tinh dầu thảo dược và đá Bazan',
    descriptionEn: 'Full body massage combining herbal essential oils and Bazan stones',
    descriptionKo: '허브 에센셜 오일과 바잔 스톤을 결합한 전신 마사지',
    image: '/images/service-signature.jpg',
    category: 'massage',
    duration: 100,
    price: 750000,
    featured: true
  }
];

export const serviceCategories = [
  { id: 'all', nameVi: 'Tất Cả', nameEn: 'All', nameKo: '전체' },
  { id: 'massage', nameVi: 'Massage', nameEn: 'Massage', nameKo: '마사지' },
  { id: 'hair', nameVi: 'Chăm Sóc Tóc', nameEn: 'Hair Care', nameKo: '헤어 케어' },
  { id: 'skincare', nameVi: 'Chăm Sóc Da', nameEn: 'Skin Care', nameKo: '스킨 케어' }
];
