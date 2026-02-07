import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { ProductType } from "@/features/products/types";
import ProductCard from "@/features/products/components/ProductCard";

export const products: ProductType[] = [
  {
    id: "1",
    name: "Pro Training Tee",
    nameAr: "تيشيرت التدريب الاحترافي",
    description:
      "Lightweight, breathable training t-shirt with moisture-wicking technology. Perfect for high-intensity workouts.",
    descriptionAr:
      "تيشيرت تدريب خفيف الوزن وقابل للتنفس مع تقنية امتصاص الرطوبة. مثالي للتمارين عالية الكثافة.",
    price: 45,
    category: "Men",
    categoryAr: "رجال",
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600",
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=600",
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Black", hex: "#1a1a1a" },
      { name: "White", hex: "#ffffff" },
      { name: "Navy", hex: "#1e3a5f" },
    ],
    isNew: true,
    isFeatured: true,
  },
  {
    id: "2",
    name: "Performance Leggings",
    nameAr: "ليغنز الأداء العالي",
    description:
      "High-waisted compression leggings with four-way stretch. Squat-proof and perfect for any workout.",
    descriptionAr:
      "ليغنز ضغط عالي الخصر مع تمدد رباعي الاتجاهات. مقاوم للشفافية ومثالي لأي تمرين.",
    price: 75,
    category: "Women",
    categoryAr: "نساء",
    images: [
      "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=600",
      "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=600",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "Black", hex: "#1a1a1a" },
      { name: "Charcoal", hex: "#36454f" },
      { name: "Wine", hex: "#722f37" },
    ],
    isNew: true,
    isFeatured: true,
  },
  {
    id: "3",
    name: "Ultra Boost Runner",
    nameAr: "حذاء الركض ألترا بوست",
    description:
      "Premium running shoes with responsive cushioning and breathable mesh upper. Built for long-distance comfort.",
    descriptionAr:
      "أحذية جري متميزة مع توسيد متجاوب وجزء علوي شبكي قابل للتنفس. مصممة لراحة المسافات الطويلة.",
    price: 180,
    category: "Shoes",
    categoryAr: "أحذية",
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600",
    ],
    sizes: ["7", "8", "9", "10", "11", "12"],
    colors: [
      { name: "Black/Lime", hex: "#88db1b" },
      { name: "White/Grey", hex: "#e0e0e0" },
      { name: "Navy/Orange", hex: "#ff6b35" },
    ],
    isFeatured: true,
  },
  {
    id: "4",
    name: "Training Shorts",
    nameAr: "شورت التدريب",
    description:
      "Lightweight training shorts with built-in liner and zipper pockets. Maximum mobility for your workouts.",
    descriptionAr:
      "شورت تدريب خفيف الوزن مع بطانة داخلية وجيوب بسحاب. أقصى قدر من الحركة لتمارينك.",
    price: 55,
    category: "Men",
    categoryAr: "رجال",
    images: [
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=600",
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=600",
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Black", hex: "#1a1a1a" },
      { name: "Grey", hex: "#6b6b6b" },
      { name: "Lime", hex: "#88db1b" },
    ],
    isNew: true,
  },
  {
    id: "5",
    name: "Sports Bra Pro",
    nameAr: "حمالة رياضية برو",
    description:
      "High-support sports bra with adjustable straps and moisture-wicking fabric. Designed for high-impact activities.",
    descriptionAr:
      "حمالة رياضية عالية الدعم مع أحزمة قابلة للتعديل وقماش ماص للرطوبة. مصممة للأنشطة عالية التأثير.",
    price: 50,
    category: "Women",
    categoryAr: "نساء",
    images: [
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600",
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "Black", hex: "#1a1a1a" },
      { name: "White", hex: "#ffffff" },
      { name: "Rose", hex: "#e91e63" },
    ],
    isFeatured: true,
  },
  {
    id: "6",
    name: "Gym Duffle Bag",
    nameAr: "حقيبة رياضية دافل",
    description:
      "Spacious gym bag with separate shoe compartment and water-resistant material. Perfect for daily training.",
    descriptionAr:
      "حقيبة رياضية واسعة مع حجرة منفصلة للأحذية ومواد مقاومة للماء. مثالية للتدريب اليومي.",
    price: 85,
    category: "Accessories",
    categoryAr: "إكسسوارات",
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600",
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=600",
    ],
    sizes: ["One Size"],
    colors: [
      { name: "Black", hex: "#1a1a1a" },
      { name: "Grey", hex: "#6b6b6b" },
      { name: "Navy", hex: "#1e3a5f" },
    ],
  },
  {
    id: "7",
    name: "Compression Tank",
    nameAr: "تانك توب ضاغط",
    description:
      "Form-fitting compression tank top that supports muscles during intense workouts. Seamless construction for comfort.",
    descriptionAr:
      "تانك توب ضاغط محكم يدعم العضلات أثناء التمارين المكثفة. بناء سلس للراحة.",
    price: 40,
    category: "Men",
    categoryAr: "رجال",
    images: [
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600",
      "https://images.unsplash.com/photo-1581009146145-b5ef050c149a?w=600",
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Black", hex: "#1a1a1a" },
      { name: "White", hex: "#ffffff" },
      { name: "Lime", hex: "#88db1b" },
    ],
  },
  {
    id: "8",
    name: "Yoga Mat Premium",
    nameAr: "سجادة يوغا فاخرة",
    description:
      "Extra-thick yoga mat with superior grip and cushioning. Eco-friendly materials for mindful practice.",
    descriptionAr:
      "سجادة يوغا سميكة إضافية مع قبضة فائقة وتوسيد. مواد صديقة للبيئة للممارسة الواعية.",
    price: 65,
    category: "Accessories",
    categoryAr: "إكسسوارات",
    images: [
      "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=600",
      "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=600",
    ],
    sizes: ["One Size"],
    colors: [
      { name: "Black", hex: "#1a1a1a" },
      { name: "Purple", hex: "#7b1fa2" },
      { name: "Teal", hex: "#009688" },
    ],
  },
  {
    id: "9",
    name: "Cross Training Shoes",
    nameAr: "أحذية التدريب المتقاطع",
    description:
      "Versatile training shoes for gym, running, and cross-training. Stable platform with flexible forefoot.",
    descriptionAr:
      "أحذية تدريب متعددة الاستخدامات للصالة الرياضية والجري والتدريب المتقاطع. منصة مستقرة مع مقدمة مرنة.",
    price: 145,
    category: "Shoes",
    categoryAr: "أحذية",
    images: [
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600",
    ],
    sizes: ["7", "8", "9", "10", "11", "12"],
    colors: [
      { name: "Black/Red", hex: "#e53935" },
      { name: "White/Black", hex: "#1a1a1a" },
      { name: "Grey/Lime", hex: "#88db1b" },
    ],
    isNew: true,
  },
  {
    id: "10",
    name: "Seamless Crop Top",
    nameAr: "كروب توب سلس",
    description:
      "Seamless cropped top with ribbed texture and built-in support. Perfect for yoga and pilates.",
    descriptionAr:
      "توب قصير سلس مع نسيج مضلع ودعم مدمج. مثالي لليوغا والبيلاتس.",
    price: 45,
    category: "Women",
    categoryAr: "نساء",
    images: [
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600",
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600",
    ],
    sizes: ["XS", "S", "M", "L"],
    colors: [
      { name: "Black", hex: "#1a1a1a" },
      { name: "Sage", hex: "#9caf88" },
      { name: "Mauve", hex: "#e0b0ff" },
    ],
  },
  {
    id: "11",
    name: "Sport Watch Pro",
    nameAr: "ساعة رياضية برو",
    description:
      "Advanced fitness tracker with heart rate monitor, GPS, and water resistance. Your perfect training companion.",
    descriptionAr:
      "متتبع لياقة متقدم مع مراقب معدل ضربات القلب ونظام تحديد المواقع ومقاومة الماء. رفيق تدريبك المثالي.",
    price: 299,
    category: "Accessories",
    categoryAr: "إكسسوارات",
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600",
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=600",
    ],
    sizes: ["One Size"],
    colors: [
      { name: "Black", hex: "#1a1a1a" },
      { name: "White", hex: "#ffffff" },
      { name: "Rose Gold", hex: "#b76e79" },
    ],
    isFeatured: true,
  },
  {
    id: "12",
    name: "Hoodie Essential",
    nameAr: "هودي أساسي",
    description:
      "Comfortable cotton-blend hoodie with kangaroo pocket. Perfect for warm-ups and casual wear.",
    descriptionAr:
      "هودي مريح من مزيج القطن مع جيب كنغر. مثالي للإحماء والارتداء اليومي.",
    price: 80,
    category: "Men",
    categoryAr: "رجال",
    images: [
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600",
      "https://images.unsplash.com/photo-1578768079052-aa76e52ff62e?w=600",
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Black", hex: "#1a1a1a" },
      { name: "Grey", hex: "#6b6b6b" },
      { name: "Olive", hex: "#556b2f" },
    ],
  },
  {
    id: "13",
    name: "Running Jacket",
    nameAr: "جاكيت الركض",
    description:
      "Lightweight, water-resistant running jacket with reflective details. Stay visible and protected.",
    descriptionAr:
      "جاكيت ركض خفيف الوزن ومقاوم للماء مع تفاصيل عاكسة. ابق مرئياً ومحمياً.",
    price: 110,
    category: "Women",
    categoryAr: "نساء",
    images: [
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=600",
      "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=600",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "Black", hex: "#1a1a1a" },
      { name: "Neon Pink", hex: "#ff6ec7" },
      { name: "Lime", hex: "#88db1b" },
    ],
    isNew: true,
  },
  {
    id: "14",
    name: "Resistance Bands Set",
    nameAr: "مجموعة أشرطة المقاومة",
    description:
      "Set of 5 resistance bands with different strength levels. Complete with carrying bag and exercise guide.",
    descriptionAr:
      "مجموعة من 5 أشرطة مقاومة بمستويات قوة مختلفة. كاملة مع حقيبة حمل ودليل تمارين.",
    price: 35,
    category: "Accessories",
    categoryAr: "إكسسوارات",
    images: [
      "https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=600",
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600",
    ],
    sizes: ["One Size"],
    colors: [{ name: "Multi-Color", hex: "#88db1b" }],
  },
  {
    id: "15",
    name: "Trail Running Shoes",
    nameAr: "أحذية الجري على الطرق الوعرة",
    description:
      "Rugged trail running shoes with aggressive tread pattern and rock plate protection. Conquer any terrain.",
    descriptionAr:
      "أحذية جري وعرة على الطرق مع نمط مداس عدواني وحماية صخرية. اقهر أي تضاريس.",
    price: 160,
    category: "Shoes",
    categoryAr: "أحذية",
    images: [
      "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=600",
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=600",
    ],
    sizes: ["7", "8", "9", "10", "11", "12"],
    colors: [
      { name: "Earth/Orange", hex: "#ff6b35" },
      { name: "Black/Grey", hex: "#4a4a4a" },
      { name: "Forest/Lime", hex: "#88db1b" },
    ],
  },
  {
    id: "16",
    name: "Yoga Pants Flow",
    nameAr: "بنطلون يوغا فلو",
    description:
      "Buttery-soft yoga pants with wide waistband. Designed for maximum comfort during your practice.",
    descriptionAr:
      "بنطلون يوغا ناعم للغاية مع حزام خصر عريض. مصمم لأقصى راحة أثناء ممارستك.",
    price: 70,
    category: "Women",
    categoryAr: "نساء",
    images: [
      "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=600",
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "Black", hex: "#1a1a1a" },
      { name: "Navy", hex: "#1e3a5f" },
      { name: "Burgundy", hex: "#800020" },
    ],
  },
  {
    id: "17",
    name: "Performance Socks 3-Pack",
    nameAr: "جوارب أداء 3 قطع",
    description:
      "Cushioned performance socks with arch support and moisture management. Perfect for any activity.",
    descriptionAr:
      "جوارب أداء مبطنة مع دعم القوس وإدارة الرطوبة. مثالية لأي نشاط.",
    price: 25,
    category: "Accessories",
    categoryAr: "إكسسوارات",
    images: [
      "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?w=600",
      "https://images.unsplash.com/photo-1582579684482-ffe0e4e2c3b0?w=600",
    ],
    sizes: ["S", "M", "L"],
    colors: [
      { name: "Black", hex: "#1a1a1a" },
      { name: "White", hex: "#ffffff" },
      { name: "Mixed", hex: "#6b6b6b" },
    ],
  },
  {
    id: "18",
    name: "Joggers Slim Fit",
    nameAr: "بنطلون جوغر ضيق",
    description:
      "Modern slim-fit joggers with tapered leg and zippered pockets. From gym to street in style.",
    descriptionAr:
      "بنطلون جوغر عصري ضيق مع ساق مستدقة وجيوب بسحاب. من الصالة الرياضية إلى الشارع بأناقة.",
    price: 75,
    category: "Men",
    categoryAr: "رجال",
    images: [
      "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=600",
      "https://images.unsplash.com/photo-1483721310020-03333e577078?w=600",
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Black", hex: "#1a1a1a" },
      { name: "Grey", hex: "#6b6b6b" },
      { name: "Navy", hex: "#1e3a5f" },
    ],
    isFeatured: true,
  },
  {
    id: "19",
    name: "Water Bottle Insulated",
    nameAr: "زجاجة مياه معزولة",
    description:
      "Double-wall insulated water bottle that keeps drinks cold for 24 hours. Leak-proof and BPA-free.",
    descriptionAr:
      "زجاجة مياه معزولة بجدار مزدوج تحافظ على المشروبات باردة لمدة 24 ساعة. مانعة للتسرب وخالية من BPA.",
    price: 40,
    category: "Accessories",
    categoryAr: "إكسسوارات",
    images: [
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600",
      "https://images.unsplash.com/photo-1523362628745-0c100150b504?w=600",
    ],
    sizes: ["One Size"],
    colors: [
      { name: "Black", hex: "#1a1a1a" },
      { name: "White", hex: "#ffffff" },
      { name: "Lime", hex: "#88db1b" },
    ],
  },
  {
    id: "20",
    name: "Basketball Shoes Elite",
    nameAr: "أحذية كرة السلة إيليت",
    description:
      "High-top basketball shoes with ankle support and responsive cushioning. Dominate the court.",
    descriptionAr:
      "أحذية كرة سلة عالية مع دعم الكاحل وتوسيد متجاوب. سيطر على الملعب.",
    price: 195,
    category: "Shoes",
    categoryAr: "أحذية",
    images: [
      "https://images.unsplash.com/photo-1579338559194-a162d19bf842?w=600",
      "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=600",
    ],
    sizes: ["8", "9", "10", "11", "12", "13"],
    colors: [
      { name: "Black/Gold", hex: "#ffd700" },
      { name: "White/Red", hex: "#e53935" },
      { name: "Navy/White", hex: "#1e3a5f" },
    ],
    isNew: true,
    isFeatured: true,
  },
];

function FeaturedProducts() {
  const featuredProducts = products.filter((p) => p.isFeatured).slice(0, 4);

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">Featured Products</h2>
          <Link href="/products">
            <Button variant="ghost" className="gap-2">
              View All
              <ArrowRight className={`h-4 w-4`} />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;
