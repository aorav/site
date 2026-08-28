/* ═══════════════════════════════════════════════════════════════════
 *  AORAV — Site Logic
 *  ──────────────────────────────────────────────────────────────────
 *  هذا الملف يحتوي على كامل منطق الموقع:
 *    1. إعدادات البراند والمنتجات والأسعار وأكواد الخصم والفيديو
 *    2. تعريف المنتجات وخيارات NFC وتخطيطات الشرائح
 *    3. منطق السلة، الشحن، الخصومات، ورسالة الواتساب
 *    4. نظام الترجمة (عربي / إنجليزي) مع الكشف التلقائي حسب المتصفح
 *
 *  للتعديل السريع — استخدم Ctrl+F وابحث عن الرمز:
 *    🎨 [1] ألوان الهوية  ← في index.html (داخل tailwind config)
 *    🔤 [2] الشعار واسم البراند
 *    📱 [3] رقم الواتساب
 *    💰 [4] الأسعار
 *    💾 [5] حفظ السلة
 *    🎁 [6] أكواد الخصم
 *    🎥 [7] فيديو اليوتيوب
 *    🛍️ [8] المنتجات
 *    🔗 [10] خيارات شرائح NFC
 *    🧩 [11] تخطيطات NFC
 *    🌐 [12] نظام الترجمة
 * ══════════════════════════════════════════════════════════════════ */


    // ═══════════════════════════════════════════════════
    // [2] الشعار واسم البراند
    // ═══════════════════════════════════════════════════

    const BRAND_NAME = 'AORAV';
    const BRAND_TAGLINE = 'منتجات مخصصة بشعارك';

    // 🎨 الشعار الرسمي — الوردمارك SVG المضمّن (يتغير لونه تلقائياً مع الهوية)
    const BRAND_LOGO = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1804.473632 522.265980" fill="currentColor" class="h-7 w-auto text-brand-900">
<g transform="translate(-30.221602,552.255638) scale(0.100000,-0.100000)">
<path d="M6495 5513C6065 5462 5752 5337 5445 5092C4852 4619 4584 3807 4774 3060C5114 1718 6744 1164 7868 2007C9037 2885 8814 4767 7471 5354C7176 5484 6783 5548 6495 5513ZM6873 4775C7608 4647 8073 3881 7844 3175C7654 2594 7028 2225 6440 2349C5709 2504 5267 3242 5496 3928C5691 4513 6284 4878 6873 4775Z"/>
<path d="M2557 5436C2549 5428 2512 5350 2475 5263C2438 5176 2385 5056 2358 4995C2330 4935 2240 4730 2158 4540C2075 4350 1975 4121 1935 4030C1895 3939 1821 3771 1771 3655C1652 3385 1336 2670 1207 2380C1152 2256 1084 2101 1055 2035C1026 1969 954 1807 895 1675C499 790 300 314.5 302 314.5L1036 314.5C1042 314.5 1085 378 1130 455C1598 1242 2350 1856 3244 2179C3509 2275 3976 2400 3994 2379C3996 2377 4061 2254 4138 2105C4215 1957 4293 1808 4312 1775C4346 1715 4346 1715 4690 1715C5035 1715 5035 1715 5038 1738C5040 1751 5037 1766 5032 1773C5027 1780 4961 1904 4885 2050C4701 2405 4632 2535 4600 2595C4585 2623 4545 2699 4510 2765C4476 2831 4424 2930 4395 2985C4366 3040 4317 3135 4285 3195C4143 3466 4103 3543 4035 3670C3995 3744 3939 3850 3910 3905C3881 3960 3786 4142 3698 4310C3610 4478 3528 4633 3515 4655C3494 4692 3283 5090 3168 5310C3090 5460 3114 5450 2820 5439L2557 5439ZM2883 4523C2919 4452 3072 4158 3150 4010C3198 3919 3275 3773 3320 3685C3366 3597 3417 3498 3435 3465C3488 3366 3646 3068 3668 3024C3689 2983 3689 2983 3497 2936C2943 2799 2416 2568 1938 2249C1873 2206 1820 2172 1820 2174C1820 2178 1935 2438 2004 2588C2035 2656 2128 2868 2211 3058C2398 3487 2422 3542 2610 3970C2694 4160 2785 4368 2813 4433C2842 4497 2866 4550 2867 4550C2868 4550 2875 4538 2883 4523Z"/>
<path d="M8998 5439C8981 5430 8980 5331 8980 3582C8980 2465 8984 1729 8990 1720L9622 1716C9626 1719 9630 1968 9630 2271L9630 2820L9904 2820C10179 2820 10179 2820 10203 2788C10216 2770 10303 2649 10395 2520C10488 2391 10676 2130 10813 1941L11063 1597L10977 1426C10888 1249 10675 840 10506 521C10453 420 10410 314.5 10412 314.5L10770 314.5L11124 314.5L11185 391C11458 781 11513 858 11533 883C11555 910 11555 910 11750 634C11857 482 11957 314.5 11972 314.5L12382 314.5L12768 314.5C12770 314.5 12357 941 12090 1307C12018 1406 12018 1397 12083 1452C12544 1844 13180 2173 13740 2309C13947 2359 14312 2420 14406 2420C14414 2420 14434 2390 14454 2348C14590 2053 14732 1754 14746 1733L15430 1728C15430 1746 15344 1931 15060 2520C14987 2671 14852 2953 14760 3145C14668 3338 14553 3576 14505 3675C14457 3774 14401 3891 14380 3935C14360 3979 14292 4121 14230 4250C14168 4379 14094 4535 14065 4595C14036 4656 13984 4764 13950 4835C13887 4968 13783 5188 13712 5342C13690 5389 13663 5433 13652 5439L13012 5439C12995 5428 12779 5004 12197 3837L11405 2249L11269 2432C11071 2699 10905 2923 10897 2936C10893 2944 10920 2963 10972 2990C11438 3228 11674 3616 11674 4145C11674 4899 11228 5389 10495 5439L8998 5439ZM10525 4775C10844 4688 11014 4474 11014 4160C11014 3917 10933 3756 10747 3628C10568 3506 10381 3475 9893 3487L9630 3493L9630 4141L9630 4789L9728 4793C9974 4803 10464 4792 10525 4775ZM13550 4265C13598 4161 13676 3994 13723 3895C13923 3474 14128 3035 14125 3032C14124 3030 14061 3020 13986 3010C13370 2923 12797 2717 12249 2386L12113 2303L12444 2964C12799 3672 13173 4430 13265 4625L13322 4745L13392 4600C13430 4520 13501 4370 13550 4265Z"/>
<path d="M14247 5443C14229 5426 14245 5372 14305 5246C14341 5171 14381 5083 14394 5052C14407 5021 14444 4941 14475 4875C14506 4809 14572 4667 14620 4560C14668 4453 14749 4275 14800 4165C14851 4055 14950 3839 15020 3685C15090 3531 15220 3248 15308 3055C15396 2863 15532 2566 15610 2395C15688 2225 15786 2011 15827 1920C15868 1829 15908 1745 15916 1733C15930 1710 15930 1710 16270 1710C16610 1710 16610 1710 16633 1748C16658 1787 16670 1813 16815 2125C16866 2235 16938 2388 16975 2465C17060 2642 17233 3011 17380 3330C17412 3399 17497 3581 17570 3735C17643 3889 17722 4060 17747 4114C17771 4169 17893 4430 18017 4694C18363 5431 18352 5407 18344 5439L17645 5439C17636 5423 17583 5311 17526 5185C17469 5058 17354 4804 17270 4620C17186 4436 17092 4227 17060 4155C17010 4042 16828 3641 16517 2960C16471 2858 16398 2697 16355 2601C16276 2427 16276 2427 16258 2466C16214 2561 16016 3002 15888 3290C15811 3463 15729 3648 15705 3700C15681 3752 15616 3899 15559 4025C15503 4152 15435 4305 15408 4365C15380 4426 15309 4585 15250 4720C15031 5214 14930 5434 14918 5439L14247 5439Z"/>
</g>
</svg>`;
    //
    // بديل: لو حبيت شعار مختلف
    // const BRAND_LOGO = `<img src="images/logo.svg" alt="AORAV" class="h-7 w-auto" />`;
    // const BRAND_LOGO = `<div class="w-10 h-10 rounded-lg bg-brand-900 text-brand-50 flex items-center justify-center font-black text-lg tracking-tight">A</div>`;


    // ═══════════════════════════════════════════════════
    // [3] الواتساب
    // ═══════════════════════════════════════════════════

    // رقمك بصيغة دولية بدون + وبدون مسافات (مثال السعودية: 9665xxxxxxxx)
    const WHATSAPP_NUMBER = '966511524229';


    // ═══════════════════════════════════════════════════
    // [4] الأسعار
    // ═══════════════════════════════════════════════════

    // اجعله false أو علّق السطر (بإضافة // في البداية) لإطفاء كل عناصر السعر
    const SHOW_PRICES = true;
    const CURRENCY = 'ر.س';


    // ═══════════════════════════════════════════════════
    // [5] السلة
    // ═══════════════════════════════════════════════════

    const PERSIST_CART = true;      // حفظ السلة في جوال العميل بين الزيارات
    const CART_EXPIRY_DAYS = 30;    // اجعله 0 للحفظ للأبد


    // ═══════════════════════════════════════════════════
    // [6] الخصم
    // ═══════════════════════════════════════════════════

    // type: 'percent' (نسبة مئوية) أو 'fixed' (مبلغ ثابت بالريال)
    const DISCOUNT_CODES = {
     'AORAVIA':  { type: 'percent', value: 10, label: '(الاحتفالية 10%)' },
     // 'WELCOME10':  { type: 'percent', value: 10, label: '(ترحيبي 10%)' },
     // 'AORAV15':    { type: 'percent', value: 15, label: '(15%)' },
     // 'RAMADAN25':  { type: 'percent', value: 25, label: '(رمضان 25%)' },
     // 'FIRST50':    { type: 'fixed',   value: 50, label: '(50 ر.س)' },
    };


    // ═══════════════════════════════════════════════════
    // [7] الفيديو
    // ═══════════════════════════════════════════════════

    // ضع معرّف الفيديو فقط (11 حرف بعد v= في الرابط)
    // مثال: من https://youtube.com/watch?v=dQw4w9WgXcQ خذ dQw4w9WgXcQ
    // اجعله '' (نص فارغ) لإخفاء قسم الفيديو تماماً
    const YOUTUBE_VIDEO_ID = 'fQJKK8NQLcA';
    const VIDEO_SECTION_TITLE = 'تعرّف على منتجاتنا';
    const VIDEO_SECTION_DESC = 'شاهد كيف نصمّم ونصنع منتجاتنا المخصصة يدوياً في بينبع';


    // ═══════════════════════════════════════════════════
    // [7.5] شعارات العملاء (شريط لا نهائي)
    // ═══════════════════════════════════════════════════
    //
    // • اترك المصفوفة فارغة [] لإخفاء القسم بالكامل
    // • ضع الشعارات في مجلد images/logos/ بجانب index.html
    // • الأفضل SVG (شفاف، أي حجم) — يقبل PNG شفاف أيضاً
    // • name: اسم العميل (للـ alt text وتحسين SEO)
    //
    const CLIENT_LOGOS = [
       { name: 'lob cafee',    src: 'images/logos/lob cafee.svg' },
       { name: 'next',         src: 'images/logos/next.svg' },
       { name: 'fondan',       src: 'images/logos/fondan.svg' },
       { name: 'zeal',         src: 'images/logos/zeal.svg' },
       { name: 'lugma',        src: 'images/logos/lugma.svg' },
       { name: 'sawaf',        src: 'images/logos/sawaf.svg' },
       { name: 'tune cafee',   src: 'images/logos/tune cafee.svg' },
       { name: 'winks coffee', src: 'images/logos/winks coffee.svg' },
       { name: 'kaylah',       src: 'images/logos/kaylah.svg' },
       { name: 'arabica',      src: 'images/logos/arabica.svg' },
       { name: 'meats tune',   src: 'images/logos/meats tune.svg' },
    ];
    const CLIENTS_SECTION_TITLE = 'اختاروا AORAV';
    const CLIENTS_SECTION_DESC  = 'مقاهي، مطاعم، وعلامات تجارية اختارت AORAV';


    // ═══════════════════════════════════════════════════
    // [8] المنتجات
    // ═══════════════════════════════════════════════════
    //
    // images: مصفوفة مسارات صور المنتج (أول صورة هي الرئيسية)
    //   • اترك المصفوفة فارغة [] لعرض placeholder مؤقت
    //   • مثال: images: ['images/p1-1.webp', 'images/p1-2.webp', 'images/p1-3.webp']
    //   • الصورة الأولى تُعرض في بطاقة المنتج في الشبكة
    //   • كل الصور تظهر كمصغّرات قابلة للتصفح في نافذة تفاصيل المنتج
    //   • كيف تضيف صور: اصنع مجلد "images" بجانب index.html، انسخ الصور فيه،
    //     ثم اذكر مسارها كنص (مثل 'images/core-front.webp')
    //
    // nfcSlots: (اختياري) يحوّل المنتج لمنصة قابلة للتكوين
    //   • layout: من التخطيطات المعرّفة في LAYOUT_DEFINITIONS:
    //       - 'prime'   → 5 شرائح (العلوية مقفلة خرائط جوجل + 4 اختيارية)
    //       - 'slim'    → 3 شرائح (الوسطى مقفلة كبيرة + جانبيتان اختياريتان)
    //       - 'core'    → 4 شرائح (كلها اختيارية، صفّان كل صف شريحتان)
    //       - 'classic' → شريحتان (علوية مقفلة + سفلية اختيارية)
    //       - 'mini'    → شريحتان (كلاهما اختياري، علوية وسفلية)
    //       - 'duo'     → شريحتان جنب بعض (لحامل المناديل ونحوه)
    //   • اختيارات الشرائح لا تؤثر على السعر — لأن التكلفة موحّدة عندك
    //
    // priceTiers: (اختياري) تسعير متدرّج حسب الكمية
    //   • مثال: [{ upTo: 10, price: 140 }, { price: 95 }]
    //     → أول 10 قطع بسعر 140 لكل قطعة، والقطع بعدها بسعر 95 لكل قطعة
    //   • upTo يعني "حتى هذه الكمية". آخر tier بدون upTo يشمل كل الباقي.
    //   • حقل price في المنتج نفسه لا يُستخدم إذا كان priceTiers موجود
    //
    // includesStand: (اختياري) لو true تظهر شارة "يشمل حامل منصة مجاناً"
    //   • يظهر تحت السعر في تفاصيل المنتج
    //   • يظهر أيضاً في رسالة الواتساب
    //
    // badge: (اختياري) نص شارة تظهر فوق صورة المنتج والمودال
    //   • مثال: badge: 'اختيارنا للمقاهي والمطاعم'
    //   • احذف الحقل أو اجعله '' لإخفائه
    //
    // salesCount: (اختياري) عدد مرات الشراء — يظهر إذا > 0
    //   • مثال: salesCount: 47 → "تم بيعه 47 مرة"
    //   • احذف الحقل أو اجعله 0 لإخفائه
    //
    // addons: (اختياري) إضافات اختيارية تزيد سعر القطعة الواحدة
    //   • كل إضافة: { id, label, price, enabled }
    //   • enabled: false يخفي الإضافة تماماً (كأنها غير موجودة)
    //   • enabled: true يجعلها ظاهرة للعميل كخانة اختيار (checkbox)
    //   • price يُضاف لسعر القطعة الواحدة ويتضاعف مع الكمية
    //
    const products = [
      {
        id: 'p5',
        name: 'اوراف سلم',
        category: 'ستاندات',
        price: 399,
        images: ['images/fs1.webp','images/ss1.webp','images/all.webp'],
        video: 'fQJKK8NQLcA',
        badge: 'الأسهل والأريح',
        salesCount: 0,
        nfcSlots: { layout: 'slim' },    // 3 شرائح: يمين + وسط مقفلة كبيرة + يسار
        shortDesc: 'المنصة النحيلة بـ 3 شرائح NFC — الوسطى كبيرة ومقفلة على خرائط جوجل.',
        description: '<strong>الأناقة في أبسط صورها.</strong><br><br>إذا كنت تبحث عن تصميم عصري لا يأخذ حيزاً من طاولتك ولكنه ينجز المهمة بامتياز، فمنصة "سلم" هي <strong>خيارك الأذكى</strong>. ركزنا فيها على جلب التقييمات عبر شريحة جوجل المركزية، مع شريحتين إضافيتين للمنيو والسوشيال ميديا، بتصميم نحيف وعملي.',
        specs: ['3 شرائح NFC (وسطى مقفلة كبيرة + جانبيتان اختياريتان)', 'خامة PLA متينة', 'شعارك مطبوع 3دي', 'برمجة مسبقة'],
        includesStand: true,
        addons: [
          { id: 'engraved_name', label: 'اسم المحل بارز مطبوع 3دي',     price: 10, enabled: false },
          { id: 'silicone_base', label: 'قاعدة سيليكون مانعة انزلاق', price: 5,  enabled: false },
        ],
      },
      {
        id: 'p8',
        name: 'باقة المعارض - منصة وميدالية ذكية',
        category: 'إكسسوارات شخصية',
        price: 175,   // السعر بعد أول 10 قطع (يستخدم للحساب فقط)
        images: ['images/cm1.jpeg','images/cm2.jpeg','images/cm3.jpeg','images/cm4.jpeg','images/mf.webp'],
        video: 'kfZatwPHClA',
        badge: 'فرصة لزوار المعارض',
        salesCount: 0,
        nfcSlots: { layout: 'duo' },  // شريحتان جنب بعض
        shortDesc: 'منصة ميني بحجم للجيب وميدالية شخصية فيها شريحة لروابطك الشخصية',
        description: 'شارك حساباتك الشخصية في المعارض بشكل سريع سواء بالميدالية او بالمنصة الميني للجيب، تقنية NFC, شارك روابطك واستمتع بفترة المعارض',
        specs: ['شريحتان NFC قابلتان للتخصيص','ميدالية ومنصة ميني', 'خامة PLA'],
        addons: [
          { id: 'custom_logo',    label: 'شعارك مطبوع 3دي',   price: 95, enabled: true  },
          { id: 'gift_wrap',  label: 'تغليف هدية',    price: 5, enabled: false },
        ],
      },
      {
        id: 'p2',
        name: 'حامل مناديل مخصص',
        category: 'إكسسوارات طاولة',
        price: 95,   // السعر بعد أول 10 قطع (يستخدم للحساب فقط)
        priceTiers: [
          { upTo: 10, price: 140 },   // أول 10 قطع بسعر 140
          { price: 95 },               // ما بعدها بسعر 95
        ],
        images: ['images/ff.webp', 'images/fb.webp'],
        video: 'wRDq20NCINk',
        salesCount: 0,
        nfcSlots: { layout: 'duo' },  // شريحتان جنب بعض
        shortDesc: 'حامل مناديل بشريحتَي NFC وشعارك — كلما زاد الطلب، انخفض السعر.',
        description: '<strong>استثمر مساحة طاولتك بذكاء.</strong><br><br>ضربنا عصفورين بحجر واحد؛ حامل مناديل فندقي فاخر يُطبع خصيصاً بشعارك، ومحطة تسويق رقمية مدمجة بشريحتين NFC. حوّل القطعة الأكثر استخداماً على الطاولة إلى أداة <strong>تزيد من تقييماتك ومبيعاتك</strong> بشكل يومي.',
        specs: ['شريحتان NFC قابلتان للتخصيص', 'المقاس: 15×10 سم', 'خامة PLA', 'شعارك مطبوع 3دي'],
        addons: [
          { id: 'qr_back',    label: 'QR في الظهر',   price: 4, enabled: true  },
          { id: 'gift_wrap',  label: 'تغليف هدية',    price: 5, enabled: false },
        ],
      },
      {
        id: 'p3',
        name: 'اوراف كلاسيك',
        category: 'ستاندات',
        price: 449,
        images: ['images/cf.webp', 'images/ct.webp','images/cs.webp'],
        video: 'fQJKK8NQLcA',
        salesCount: 0,
        nfcSlots: { layout: 'classic' },  // شريحتان: علوية مقفلة خرائط + سفلية اختيارية
        shortDesc: 'المنصة الكلاسيكية بشريحتَي NFC — العلوية خرائط جوجل والسفلية اختيارية.',
        description: 'التصميم الأصلي من AORAV — منصة أنيقة بشريحتَي NFC. الشريحة العلوية مبرمجة دائماً على موقعك في خرائط جوجل، والشريحة السفلية تختار محتواها بحرية من قائمة الخيارات المتاحة.',
        specs: ['شريحتان NFC (علوية مقفلة + سفلية اختيارية)', 'خامة PLA', 'شعارك مطبوع 3دي في الواجهة', 'برمجة مسبقة'],
        includesStand: true,
        addons: [
          { id: 'engraved_name', label: 'اسم المحل بارز مطبوع 3دي',     price: 12, enabled: false },
          { id: 'silicone_base', label: 'قاعدة سيليكون مانعة انزلاق', price: 5,  enabled: false },
        ],
      },
      {
        id: 'p4',
        name: 'اوراف كور',
        category: 'ستاندات',
        price: 499,
        images: ['images/fe.webp', 'images/se.webp'],
        video: 'fQJKK8NQLcA',
        salesCount: 0,
        nfcSlots: { layout: 'core' },   // 4 شرائح كلها اختيارية
        shortDesc: 'الجيل المتوسط بـ 4 شرائح NFC اختيارية بالكامل — أنت تختار الأربع.',
        description: '<strong>المرونة الكاملة بين يديك.</strong><br><br>صممنا منصة "كور" لتمنحك <strong>تحكماً تاماً</strong> في واجهتك الرقمية. بأربع شرائح NFC قابلة للتخصيص بالكامل، يمكنك توجيه عملائك لأي رابط تريده بحرية تامة، مع تصميم 3D يبرز قوة علامتك التجارية على كل طاولة.',
        specs: ['4 شرائح NFC كلها قابلة للتخصيص', 'خامة PLA', 'شعارك مطبوع 3دي في الواجهة', 'برمجة مسبقة'],
        includesStand: true,
        addons: [
          { id: 'engraved_name', label: 'اسم المحل بارز مطبوع 3دي',     price: 12, enabled: false },
          { id: 'silicone_base', label: 'قاعدة سيليكون مانعة انزلاق', price: 5,  enabled: false },
        ],
      },
      {
        id: 'p1',
        name: 'اوراف برايم',
        category: 'ستاندات',
        price: 520,
        images: ['images/fp1.webp','images/fp2.webp','images/fp3.webp','images/sp1.webp'],
        video: 'dIQs_EP1k-w',
        badge: 'اختيارنا للمقاهي والمطاعم',
        salesCount: 0,
        nfcSlots: { layout: 'prime' },   // 5 شرائح (العلوية مقفلة على خرائط جوجل)
        shortDesc: 'منصة راقية بـ 5 شرائح NFC — العلوية خرائط جوجل ثابتة، و4 اختيارية.',
        description: '<strong>الواجهة الرقمية الأفخم لضيوفك.</strong><br><br>حوّل كل طاولة إلى نقطة تفاعل متكاملة تليق بمستوى ضيافتك. منصة "برايم" هي <strong>خيار النخبة</strong>، تجمع بين التصميم ثلاثي الأبعاد الفاخر لهويتك، وتقنية NFC بخمس شرائح لتضع كل قنواتك (منيو، تقييم، سوشيال ميديا) تحت إصبع العميل <strong>بلمسة واحدة</strong>.',
        specs: ['5 شرائح NFC (1 مقفلة + 4 اختيارية)', 'خامة PLA', 'شعارك مطبوع 3دي في الواجهة', 'برمجة الشرائح مسبقاً'],
        includesStand: true,
        addons: [
          { id: 'engraved_name', label: 'اسم المحل بارز مطبوع 3دي',     price: 15, enabled: false },
          { id: 'silicone_base', label: 'قاعدة سيليكون مانعة انزلاق', price: 5,  enabled: false },
        ],
      },
      {
        id: 'p6',
        name: 'اوراف ميني',
        category: 'بطاقات محمولة',
        price: 240,
        images: ['images/mf.webp','images/all.webp'],
        video: 'fQJKK8NQLcA',
        badge: 'خفيفة بسيطة',
        salesCount: 0,
        nfcSlots: { layout: 'mini' },   // شريحتان (علوية + سفلية) كلاهما اختياريتان
        shortDesc: 'البطاقة المحمولة بشريحتَي NFC — تكفي جيب البنطلون.',
        description: '<strong>واجهتك الرقمية التي لا تفارقك.</strong><br><br>رفيقك المثالي في المعارض، الفعاليات، أو حتى داخل جيبك. "أوراف ميني" هو <strong>بطاقة أعمالك الذكية والمدمجة</strong>، يحمل هويتك وشريحتَي NFC لمشاركة تقييمك أو حساباتك بلمسة واحدة أينما ذهبت.',
        specs: ['شريحتان NFC اختياريتان', 'خامة PLA', 'شعارك مطبوع 3دي', 'مقاس محمول للجيب'],
        addons: [
          { id: 'engraved_name', label: 'اسم المحل بارز مطبوع 3دي',     price: 8, enabled: false },
          { id: 'silicone_base', label: 'قاعدة سيليكون مانعة انزلاق', price: 3, enabled: false },
        ],
      },
      // ─────────────────────────────────────────────────
      // منتج إضافي خاص — يظهر فقط كترقية داخل السلة
      // hiddenFromGrid: يخفيه من شبكة المنتجات الرئيسية
      // hidePrice: يخفي السعر في كل مكان (السلة، الملخص، رسالة الواتساب)
      // qtyStep: الكمية تُزاد/تنقص بمضاعفات هذا الرقم
      // minQty: أقل كمية مسموحة
      // ─────────────────────────────────────────────────
      {
        id: 'p7',
        name: 'ميداليات مخصصة بشعارك',
        category: 'إضافات',
        price: 0,
        hidePrice: true,
        hiddenFromGrid: true,
        qtyStep: 10,
        minQty: 10,
        images: [],
        shortDesc: 'ميداليات معدنية بشعار محلك — تُطلب بمضاعفات 10.',
      },
      // ─────────────────────────────────────────────────
      // منتجات مخصصة بتكوين NFC — العميل يختار محتوى كل شريحة
      // أضف nfcSlots.layout = 'prime' (5 شرائح) أو 'slim' (3 شرائح)
      // ─────────────────────────────────────────────────
     
    ];


    // ═══════════════════════════════════════════════════
    // [10] خيارات شرائح NFC
    // ═══════════════════════════════════════════════════
    //
    // كل خيار = محتوى ممكن تربطه الشريحة عند لمس الجوال.
    // أضف/احذف من هنا، وسيظهر تلقائياً في كل قائمة اختيار.
    //
    // الأيقونات SVG بأسلوب الفوتر — تستخدم currentColor فتتبع لون الحاوية تلقائياً
    const NFC_OPTIONS = {
      google_maps: {
        label: 'خرائط جوجل',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`
      },
      snap: {
        label: 'سناب شات',
        icon: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-full h-full"><path d="M12 2c-3.3 0-6 2.7-6 6v3c0 .5-.4 1-1 1.2-.6.2-1 .5-1 1 0 .4.3.7 1 1 .5.2.9.5 1 1 0 .3-.1.6-.3.9-.7 1.1-1.7 1.6-2.5 1.7-.3 0-.5.3-.5.6 0 .5.6.7 1.2.8.4.1.7.1 1 .3.2.2.3.5.4.8.1.4.4.6.7.6.4 0 .8-.1 1.3-.1 1.1 0 1.7.5 2.4 1 .8.6 1.6 1.2 3.3 1.2s2.5-.6 3.3-1.2c.7-.5 1.3-1 2.4-1 .5 0 .9.1 1.3.1.3 0 .6-.2.7-.6.1-.3.2-.6.4-.8.3-.2.6-.2 1-.3.6-.1 1.2-.3 1.2-.8 0-.3-.2-.6-.5-.6-.8-.1-1.8-.6-2.5-1.7-.2-.3-.3-.6-.3-.9.1-.5.5-.8 1-1 .7-.3 1-.6 1-1 0-.5-.4-.8-1-1-.6-.2-1-.7-1-1.2V8c0-3.3-2.7-6-6-6z"/></svg>`
      },
      tiktok: {
        label: 'تيك توك',
        icon: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-full h-full"><path d="M19.6 6.3c-1.3-.2-2.4-.9-3.1-1.9-.4-.5-.6-1.2-.7-1.9V2h-3.3v13.4c0 1.5-1.2 2.7-2.7 2.7-.7 0-1.4-.3-1.9-.8-.5-.5-.8-1.2-.8-1.9 0-1.5 1.2-2.7 2.7-2.7.3 0 .5 0 .8.1V9.4c-.3 0-.5-.1-.8-.1-3.3 0-6 2.7-6 6s2.7 6 6 6c1.6 0 3.1-.6 4.2-1.7 1.1-1.1 1.7-2.6 1.7-4.2V8.7c1.3.9 2.9 1.4 4.5 1.4V6.8c-.2 0-.4 0-.6-.05z"/></svg>`
      },
      whatsapp: {
        label: 'واتساب',
        icon: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-full h-full"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>`
      },
      facebook: {
        label: 'فيسبوك',
        icon: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-full h-full"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/></svg>`
      },
      instagram: {
        label: 'انستقرام',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>`
      },
      documents: {
        label: 'مستندات',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="9" y1="13" x2="15" y2="13"/><line x1="9" y1="17" x2="15" y2="17"/></svg>`
      },
      menu: {
        label: 'منيو',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M4 4h13a3 3 0 0 1 3 3v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4z"/><line x1="8" y1="10" x2="16" y2="10"/><line x1="8" y1="14" x2="14" y2="14"/></svg>`
      },
      linktree: {
        label: 'لنك تري - صفحة روابط',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>`
      },
      app_download: {
        label: 'تحميل برنامج',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><rect x="6" y="2" width="12" height="20" rx="2" ry="2"/><path d="M12 8v6"/><polyline points="9 12 12 15 15 12"/></svg>`
      },
      loyalty_points: {
        label: 'نقاط الولاء',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`
      },
      online_store: {
        label: 'متجر الكتروني',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>`
      },
    };

    // ═══════════════════════════════════════════════════
    // [11] تخطيطات NFC — متقدّم
    // ═══════════════════════════════════════════════════
    // مسمّيات وترتيب مواقع الشرائح لكل تخطيط
    // ─────────────────────────────────────────────────────────
    // كل تخطيط عبارة عن صفوف، كل صف يحتوي شرائح
    // الحقول لكل شريحة:
    //   • id      : معرّف داخلي (لا تكرّره داخل نفس التخطيط)
    //   • label   : اسم موقع الشريحة (يظهر للعميل وفي رسالة الواتساب)
    //   • size    : 'sm' | 'md' | 'lg' — يؤثر على الحجم البصري
    //   • locked  : (اختياري) يقفل الشريحة على خيار محدد من NFC_OPTIONS
    //               مثال locked: 'google_maps' — الشريحة تُعبّأ تلقائياً ولا يقدر العميل تغييرها
    // ─────────────────────────────────────────────────────────
    const LAYOUT_DEFINITIONS = {
      // Prime — 5 شرائح: علوية مقفلة على خرائط جوجل + صف وسطي شريحتين + صف سفلي شريحتين
      prime: {
        rows: [
          { slots: [
            { id: 's1', label: 'العلوي', size: 'lg', locked: 'google_maps' },
          ]},
          { slots: [
            { id: 's2', label: 'الوسط الأيمن', size: 'md' },
            { id: 's3', label: 'الوسط الأيسر', size: 'md' },
          ]},
          { slots: [
            { id: 's4', label: 'السفلي الأيمن', size: 'md' },
            { id: 's5', label: 'السفلي الأيسر', size: 'md' },
          ]},
        ],
      },
      // Slim — 3 شرائح: الوسطى كبيرة (مقفلة خرائط)، جانبيتان أصغر
      slim: {
        rows: [
          { template: '1fr 1.8fr 1fr', slots: [
            { id: 's1', label: 'اليمين', size: 'sm' },
            { id: 's2', label: 'الوسط', size: 'lg', locked: 'google_maps' },
            { id: 's3', label: 'اليسار', size: 'sm' },
          ]},
        ],
      },
      // Core — 4 شرائح: علوية يمين ويسار، سفلية يمين ويسار (كلها قابلة للتخصيص)
      core: {
        rows: [
          { slots: [
            { id: 's1', label: 'العلوي الأيمن', size: 'md' },
            { id: 's2', label: 'العلوي الأيسر', size: 'md' },
          ]},
          { slots: [
            { id: 's3', label: 'السفلي الأيمن', size: 'md' },
            { id: 's4', label: 'السفلي الأيسر', size: 'md' },
          ]},
        ],
      },
      // Classic — شريحتان: علوية مقفلة على خرائط جوجل + سفلية قابلة للتخصيص
      classic: {
        rows: [
          { slots: [
            { id: 's1', label: 'العلوي', size: 'lg', locked: 'google_maps' },
          ]},
          { slots: [
            { id: 's2', label: 'السفلي', size: 'md' },
          ]},
        ],
      },
      // Mini — شريحتان: علوية وسفلية (كلاهما قابل للتخصيص)
      mini: {
        rows: [
          { slots: [{ id: 's1', label: 'العلوي', size: 'md' }] },
          { slots: [{ id: 's2', label: 'السفلي', size: 'md' }] },
        ],
      },
      // Duo — شريحتان جنب بعض (لحامل المناديل)
      duo: {
        rows: [
          { slots: [
            { id: 's1', label: 'اليمين', size: 'md' },
            { id: 's2', label: 'اليسار', size: 'md' },
          ]},
        ],
      },
    };

    // ─────────────────────────────────────────────────────────
    // دوال مساعدة للتخطيطات
    // ─────────────────────────────────────────────────────────
    function getAllSlots(layoutName) {
      const layout = LAYOUT_DEFINITIONS[layoutName];
      if (!layout) return [];
      return layout.rows.flatMap(r => r.slots);
    }
    function getSlotLabel(layoutName, slotId) {
      const slot = getAllSlots(layoutName).find(s => s.id === slotId);
      return slot ? slot.label : slotId;
    }
    function getLockedSlots(layoutName) {
      const locked = {};
      getAllSlots(layoutName).forEach(s => { if (s.locked) locked[s.id] = s.locked; });
      return locked;
    }


    // ══════════════════════════════════════════════════════════════
    // ⛔ ⛔ ⛔  ما تحت هذا الخط لا يحتاج تعديل عادةً — منطق الموقع  ⛔ ⛔ ⛔
    // ══════════════════════════════════════════════════════════════

    // -------------------------------------
    // تتبّع المسوّقين (Affiliate Tracking)
    // • يقرأ ?ref=X من الرابط، يتحقق من وجوده في AFFILIATES (refs.js)،
    //   ويخزّن الكود في المتصفح بصلاحية 60 يوم (last-touch).
    // • قيمة ref غير معروفة → تُتجاهل تماماً.
    // • عند إرسال الطلب، يُضاف الكود في تذييل رسالة الواتساب.
    // -------------------------------------
    const REF_STORAGE_KEY = 'aorav_ref_v1';
    const REF_EXPIRY_DAYS = 60;

    (function captureRefFromURL() {
      try {
        const params = new URLSearchParams(window.location.search);
        const ref = params.get('ref');
        if (!ref) return;
        if (typeof AFFILIATES === 'undefined' || !AFFILIATES[ref]) return;
        const code = AFFILIATES[ref];
        const expires = Date.now() + REF_EXPIRY_DAYS * 24 * 60 * 60 * 1000;
        localStorage.setItem(REF_STORAGE_KEY, JSON.stringify({ code, expires }));
      } catch (e) { /* localStorage unavailable — ignore */ }
    })();

    function getActiveRefCode() {
      try {
        const raw = localStorage.getItem(REF_STORAGE_KEY);
        if (!raw) return null;
        const data = JSON.parse(raw);
        if (!data || !data.code || !data.expires) return null;
        if (Date.now() > data.expires) {
          localStorage.removeItem(REF_STORAGE_KEY);
          return null;
        }
        return data.code;
      } catch (e) { return null; }
    }

    let cart = [];                    // مصفوفة من عناصر السلة، كل عنصر بمعرّف فريد
    let currentProduct = null;
    let currentQty = 1;
    let currentImgIndex = 0;
    let currentNfcSelections = {};    // اختيارات NFC للمنتج المفتوح حالياً
    let currentSelectedAddons = new Set(); // الإضافات المفعّلة للمنتج المفتوح حالياً
    let appliedDiscount = null;

    if (!SHOW_PRICES) document.body.classList.add('no-prices');

    // -------------------------------------
    // أدوات مساعدة للسلة
    // -------------------------------------
    function genCartItemId() {
      return 'ci_' + Date.now() + '_' + Math.random().toString(36).slice(2, 7);
    }

    function nfcConfigsMatch(a, b) {
      const ak = Object.keys(a || {}).sort();
      const bk = Object.keys(b || {}).sort();
      if (ak.length !== bk.length) return false;
      return ak.every((k, i) => k === bk[i] && a[k] === b[k]);
    }

    function addonsMatch(a, b) {
      const setA = new Set(a || []);
      const setB = new Set(b || []);
      if (setA.size !== setB.size) return false;
      return [...setA].every(x => setB.has(x));
    }

    // سعر القطعة الواحدة بعد إضافة الإضافات المختارة (بدون احتساب التسعير المتدرّج)
    function getUnitPrice(productId, selectedAddonIds) {
      const p = products.find(x => x.id === productId);
      if (!p) return 0;
      let price = p.price;
      (selectedAddonIds || []).forEach(addonId => {
        const addon = (p.addons || []).find(a => a.id === addonId);
        if (addon) price += addon.price;
      });
      return price;
    }

    // حساب السعر الأساسي مع مراعاة التسعير المتدرّج (bulk tiers)
    // مثال: priceTiers: [{ upTo: 10, price: 140 }, { price: 95 }]
    //   → أول 10 قطع بسعر 140، والباقي بسعر 95
    function calcTieredBasePrice(product, qty) {
      const tiers = product.priceTiers;
      if (!tiers || tiers.length === 0) return product.price * qty;

      let total = 0;
      let remaining = qty;
      let processed = 0;

      for (const tier of tiers) {
        if (remaining <= 0) break;
        let inTier;
        if (tier.upTo !== undefined) {
          const capacity = tier.upTo - processed;
          inTier = Math.min(remaining, capacity);
          processed = tier.upTo;
        } else {
          inTier = remaining;
        }
        total += inTier * tier.price;
        remaining -= inTier;
      }
      return total;
    }

    // إجمالي سطر السلة (الأساس المتدرّج + الإضافات × الكمية)
    function calcLineTotal(item) {
      const p = products.find(x => x.id === item.productId);
      if (!p) return 0;
      const baseTotal = calcTieredBasePrice(p, item.qty);
      const addonPerUnit = (item.addons || []).reduce((sum, addonId) => {
        const addon = (p.addons || []).find(a => a.id === addonId);
        return sum + (addon ? addon.price : 0);
      }, 0);
      return baseTotal + (addonPerUnit * item.qty);
    }

    // نص وصفي للتسعير المتدرّج (يظهر في تفاصيل المنتج)
    function tieredPricingLabel(product) {
      const tiers = product.priceTiers;
      if (!tiers || tiers.length === 0) return null;
      const parts = [];
      let prev = 0;
      tiers.forEach(t => {
        if (t.upTo !== undefined) {
          parts.push(`أول ${t.upTo - prev} قطعة بسعر ${t.price} ${CURRENCY}`);
          prev = t.upTo;
        } else {
          parts.push(`ما بعدها بسعر ${t.price} ${CURRENCY} لكل قطعة`);
        }
      });
      return parts.join('، ');
    }

    // تفصيل حسابي للتسعير المتدرّج على كمية محددة (لرسالة الواتساب)
    // مثال: qty=15 مع tiers → "10 × 140 + 5 × 95"
    function buildTierBreakdown(product, qty) {
      const tiers = product.priceTiers;
      if (!tiers || tiers.length === 0) return null;
      const parts = [];
      let remaining = qty;
      let processed = 0;
      for (const tier of tiers) {
        if (remaining <= 0) break;
        let inTier;
        if (tier.upTo !== undefined) {
          const capacity = tier.upTo - processed;
          inTier = Math.min(remaining, capacity);
          processed = tier.upTo;
        } else {
          inTier = remaining;
        }
        if (inTier > 0) parts.push(`${inTier} قطعة بسعر ${tier.price}`);
        remaining -= inTier;
      }
      return parts.length > 1 ? parts.join(' + ') : null;
    }

    function totalCartItems() {
      return cart.reduce((sum, item) => sum + item.qty, 0);
    }

    // -------------------------------------
    // حفظ واسترجاع السلة
    // -------------------------------------
    const CART_STORAGE_KEY = 'aorav_cart_v1';

    function saveCart() {
      if (!PERSIST_CART) return;
      try {
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify({ cart, updatedAt: Date.now() }));
      } catch (e) { console.warn('تعذّر حفظ السلة:', e); }
    }

    function loadCart() {
      if (!PERSIST_CART) return;
      try {
        const raw = localStorage.getItem(CART_STORAGE_KEY);
        if (!raw) return;
        const data = JSON.parse(raw);
        if (CART_EXPIRY_DAYS > 0) {
          const daysSince = (Date.now() - data.updatedAt) / (1000 * 60 * 60 * 24);
          if (daysSince > CART_EXPIRY_DAYS) {
            localStorage.removeItem(CART_STORAGE_KEY);
            return;
          }
        }
        // فلترة: أبقِ فقط العناصر التي منتجاتها لا تزال موجودة
        const loaded = Array.isArray(data.cart) ? data.cart : [];
        cart = loaded.filter(item => products.find(p => p.id === item.productId));
      } catch (e) { console.warn('تعذّر استرجاع السلة:', e); }
    }

    function clearCart() {
      cart = [];
      appliedDiscount = null;
      try { localStorage.removeItem(CART_STORAGE_KEY); } catch (e) {}
      renderCart();
      showToast('تم تفريغ السلة');
    }

    // -------------------------------------
    // نظام الصور — placeholder + عرض الصور
    // -------------------------------------
    function placeholderHTML(sizeClass = '') {
      return `<div class="w-full h-full bg-gradient-to-br from-brand-100 to-brand-50 flex flex-col items-center justify-center text-brand-500 ${sizeClass}">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
        </svg>
        <span class="text-xs mt-2">صورة المنتج</span>
      </div>`;
    }

    function productCardImage(product) {
      if (!product.images || product.images.length === 0) {
        return `<div class="aspect-[4/3]">${placeholderHTML()}</div>`;
      }
      return `<div class="aspect-[4/3] bg-brand-50">
        <img src="${product.images[0]}" alt="${product.name}" class="w-full h-full object-cover" loading="lazy" />
      </div>`;
    }

    // -------------------------------------
    // بناء بطاقات المنتجات
    // -------------------------------------
    function renderProducts() {
      const grid = document.getElementById('productsGrid');
      grid.innerHTML = products.filter(p => !p.hiddenFromGrid).map(p => {
        const displayPrice = p.priceTiers && p.priceTiers[0] ? p.priceTiers[0].price : p.price;

        // شارة المنتج (badge) — تظهر فوق الصورة إذا حُدّدت، بلون نحاسي متحرك يلفت النظر
        const badgeHtml = p.badge
          ? `<div class="absolute top-3 right-3 z-10">
               <div class="badge-eye inline-flex items-center gap-1.5 text-[11px] font-bold px-3 py-1.5 rounded-full">
                 <svg class="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                   <path d="M12 2l2.9 6.9L22 10l-5.5 4.8L18.2 22 12 18.3 5.8 22l1.7-7.2L2 10l7.1-1.1z"/>
                 </svg>
                 <span>${p.badge}</span>
               </div>
             </div>`
          : '';

        // عدّاد مرات الشراء — يظهر فقط إذا salesCount > 0
        const salesCountHtml = (p.salesCount && p.salesCount > 0)
          ? `<span class="text-[10px] text-brand-500">تم بيعه ${p.salesCount} مرة</span>`
          : '';

        return `
        <div class="card-hover bg-white rounded-2xl overflow-hidden cursor-pointer border border-brand-100" onclick="openProductModal('${p.id}')">
          <div class="relative">
            ${badgeHtml}
            ${productCardImage(p)}
          </div>
          <div class="p-5">
            <div class="flex items-start justify-between gap-2">
              <span class="text-xs text-brand-500">${p.category}</span>
              <span class="price-tag text-sm font-bold text-brand-700">${displayPrice} ${CURRENCY}</span>
            </div>
            <h5 class="font-bold text-lg mt-1 mb-2">${p.name}</h5>
            <p class="text-sm text-brand-900/70 leading-relaxed line-clamp-2">${p.shortDesc}</p>
            <div class="mt-4 flex items-center justify-between">
              <div class="flex flex-col gap-0.5">
                <span class="text-xs text-brand-500">اضغط للتفاصيل</span>
                ${salesCountHtml}
              </div>
              <span class="text-brand-900">←</span>
            </div>
          </div>
        </div>
      `;
      }).join('');
    }

    // -------------------------------------
    // تفاصيل المنتج + شريط المصغّرات
    // -------------------------------------
    function openProductModal(id) {
      currentProduct = products.find(p => p.id === id);
      if (!currentProduct) return;
      currentQty = 1;
      currentImgIndex = 0;
      currentNfcSelections = {};
      currentSelectedAddons = new Set();

      // أوقف الفيديو الرئيسي إذا كان شغال قبل ما نفتح المودال
      stopBottomVideo();

      document.getElementById('modalCategory').textContent = currentProduct.category;
      document.getElementById('modalName').textContent = currentProduct.name;

      // شارة المنتج (badge)
      const badgeEl = document.getElementById('modalBadge');
      const badgeTxt = document.getElementById('modalBadgeText');
      if (currentProduct.badge) {
        badgeTxt.textContent = currentProduct.badge;
        badgeEl.classList.remove('hidden');
        badgeEl.classList.add('inline-flex');
      } else {
        badgeEl.classList.add('hidden');
        badgeEl.classList.remove('inline-flex');
      }

      // عدّاد مرات الشراء — يظهر فقط إذا > 0
      const salesEl = document.getElementById('modalSalesCount');
      if (currentProduct.salesCount && currentProduct.salesCount > 0) {
        salesEl.textContent = `تم بيعه ${currentProduct.salesCount} مرة`;
        salesEl.classList.remove('hidden');
      } else {
        salesEl.classList.add('hidden');
      }

      // عرض السعر — إذا كان فيه تسعير متدرّج، اعرض سعر أول tier مع ملاحظة
      const tierNoteEl = document.getElementById('modalTierNote');
      if (currentProduct.priceTiers && currentProduct.priceTiers.length > 0) {
        const firstTier = currentProduct.priceTiers[0];
        document.getElementById('modalPrice').textContent = `${firstTier.price} ${CURRENCY}`;
        tierNoteEl.textContent = tieredPricingLabel(currentProduct);
        tierNoteEl.classList.remove('hidden');
      } else {
        document.getElementById('modalPrice').textContent = `${currentProduct.price} ${CURRENCY}`;
        tierNoteEl.classList.add('hidden');
      }

      document.getElementById('modalDescription').innerHTML = currentProduct.description;

      // شارة "يشمل حامل منصة مجاناً" — تظهر فقط لو includesStand: true
      const standBadge = document.getElementById('modalStandBadge');
      if (currentProduct.includesStand) standBadge.classList.remove('hidden');
      else standBadge.classList.add('hidden');
      document.getElementById('modalQty').value = currentQty;

      document.getElementById('modalSpecs').innerHTML =
        currentProduct.specs.map(s => `<li class="flex items-start gap-2"><span class="text-brand-500">•</span><span>${s}</span></li>`).join('');

      renderModalImages();
      renderNfcConfigurator();  // يعرض واجهة اختيار الشرائح لو كان المنتج فيه nfcSlots
      renderAddonsSelector();   // يعرض الإضافات الاختيارية إن وُجدت

      const modal = document.getElementById('productModal');
      modal.classList.remove('hidden');
      modal.classList.add('flex');
    }

    // -------------------------------------
    // واجهة الإضافات الاختيارية
    // -------------------------------------
    function renderAddonsSelector() {
      const container = document.getElementById('addonsSelector');
      const enabled = (currentProduct.addons || []).filter(a => a.enabled);

      if (enabled.length === 0) {
        container.innerHTML = '';
        return;
      }

      container.innerHTML = `
        <div class="border-t border-brand-100 pt-4">
          <p class="text-sm font-bold mb-3">إضافات اختيارية</p>
          <div class="space-y-2">
            ${enabled.map(a => {
              const checked = currentSelectedAddons.has(a.id);
              return `
                <label class="flex items-center gap-3 p-3 bg-brand-50 rounded-lg cursor-pointer hover:bg-brand-100 transition ${checked ? 'ring-2 ring-brand-700' : ''}">
                  <input type="checkbox" ${checked ? 'checked' : ''}
                    onchange="toggleAddon('${a.id}')"
                    class="w-4 h-4 accent-brand-900" />
                  <span class="flex-1 text-sm">${a.label}</span>
                  <span class="price-tag text-sm font-semibold text-brand-700">+${a.price} ${CURRENCY}</span>
                </label>
              `;
            }).join('')}
          </div>
        </div>
      `;
    }

    function toggleAddon(addonId) {
      if (currentSelectedAddons.has(addonId)) currentSelectedAddons.delete(addonId);
      else currentSelectedAddons.add(addonId);
      renderAddonsSelector();
    }

    // -------------------------------------
    // واجهة تكوين شرائح NFC
    // -------------------------------------
    function renderNfcConfigurator() {
      const container = document.getElementById('nfcConfigurator');
      if (!currentProduct.nfcSlots) {
        container.innerHTML = '';
        return;
      }

      const layoutName = currentProduct.nfcSlots.layout;
      const layout = LAYOUT_DEFINITIONS[layoutName];
      if (!layout) { container.innerHTML = ''; return; }

      // تعبئة الشرائح المقفلة تلقائياً (خرائط جوجل مثلاً)
      const lockedSlots = getLockedSlots(layoutName);
      Object.keys(lockedSlots).forEach(sid => {
        currentNfcSelections[sid] = lockedSlots[sid];
      });

      // بناء الصفوف
      const rowsHtml = layout.rows.map(row => {
        const slotsHtml = row.slots.map(slot => renderSlot(slot)).join('');
        const style = row.template ? `style="display: grid; grid-template-columns: ${row.template}; gap: 8px; align-items: center;"` : '';
        const cls = row.template ? '' : `grid grid-cols-${row.slots.length} gap-2 items-center`;
        return `<div class="${cls}" ${style}>${slotsHtml}</div>`;
      }).join('<div class="h-2"></div>');

      const allSlots = getAllSlots(layoutName);
      const customizableSlots = allSlots.filter(s => !s.locked);
      const filledCustomizable = customizableSlots.filter(s => currentNfcSelections[s.id]).length;

      container.innerHTML = `
        <div class="border-t border-brand-100 pt-4">
          <div class="flex items-center justify-between mb-3">
            <p class="text-sm font-bold">اختر محتوى شرائح NFC</p>
            <span class="text-xs text-brand-500">${filledCustomizable} / ${customizableSlots.length} قابلة للاختيار</span>
          </div>
          <div class="bg-brand-50 p-3 rounded-lg">
            ${rowsHtml}
          </div>
          <p class="text-xs text-brand-500 mt-2">اضغط أي شريحة قابلة للاختيار لتحديد محتواها.</p>
        </div>
      `;
    }

    function renderSlot(slot) {
      const isLocked = !!slot.locked;
      const selected = currentNfcSelections[slot.id] || (isLocked ? slot.locked : null);

      // تحويل حجم الشريحة إلى aspect ratio مناسب
      const aspectMap = { sm: 'aspect-[3/4]', md: 'aspect-square', lg: 'aspect-square' };
      const aspectClass = aspectMap[slot.size] || 'aspect-square';

      // ملاحظة: <option> ما يقبل HTML/SVG، لذا نعرض اسم الخيار فقط داخل القائمة المنسدلة
      const optionsHtml = Object.keys(NFC_OPTIONS).map(key => {
        const opt = NFC_OPTIONS[key];
        return `<option value="${key}" ${selected === key ? 'selected' : ''}>${opt.label}</option>`;
      }).join('');

      // حجم أيقونة الشريحة يعتمد على size (lg / md / sm)
      const iconSizeClass = slot.size === 'lg' ? 'w-9 h-9' : (slot.size === 'sm' ? 'w-6 h-6' : 'w-7 h-7');
      const content = selected
        ? `<div class="${iconSizeClass} text-brand-900">${NFC_OPTIONS[selected].icon}</div>
           <div class="text-[11px] font-semibold text-brand-900 mt-1 leading-tight">${NFC_OPTIONS[selected].label}</div>`
        : `<div class="text-brand-500 text-2xl opacity-40">+</div>`;

      let borderClass, extraHtml = '';
      if (isLocked) {
        // شريحة مقفلة: حدود نحاسية بلون brand-700
        borderClass = 'border-solid border-2 bg-white';
        extraHtml = `<div class="absolute top-1 left-1 bg-brand-700 text-white text-[8px] px-1.5 py-0.5 rounded font-bold z-10">مقفل</div>`;
      } else {
        borderClass = selected ? 'border-solid border-brand-900 bg-white' : 'border-dashed border-brand-500/40 bg-white/50';
      }

      const lockedStyle = isLocked ? 'style="border-color: #c27946"' : '';
      const selectDisabled = isLocked ? 'disabled' : '';

      return `
        <div class="relative ${aspectClass} border-2 ${borderClass} rounded-lg overflow-hidden transition" ${lockedStyle}>
          ${extraHtml}
          <div class="absolute inset-0 flex flex-col items-center justify-center p-1 text-center pointer-events-none">
            ${content}
            <div class="text-[9px] text-brand-500 mt-1 leading-tight">${slot.label}</div>
          </div>
          <select ${selectDisabled} onchange="updateNfcSlot('${slot.id}', this.value)" class="absolute inset-0 w-full h-full opacity-0 ${isLocked ? 'cursor-not-allowed' : 'cursor-pointer'}">
            <option value="">-- بلا اختيار --</option>
            ${optionsHtml}
          </select>
        </div>
      `;
    }

    function updateNfcSlot(slotId, value) {
      // لا نسمح بتغيير الشرائح المقفلة (احتياط إضافي بجانب disabled)
      const layoutName = currentProduct.nfcSlots && currentProduct.nfcSlots.layout;
      const lockedSlots = layoutName ? getLockedSlots(layoutName) : {};
      if (lockedSlots[slotId]) return;

      if (!value) delete currentNfcSelections[slotId];
      else currentNfcSelections[slotId] = value;
      renderNfcConfigurator();
    }

    function renderModalImages() {
      const mainArea = document.getElementById('modalMainImage');
      const thumbsArea = document.getElementById('modalThumbs');
      const imgs = currentProduct.images || [];
      const videoId = currentProduct.video;
      const hasVideo = !!videoId;
      const videoIndex = imgs.length; // الفيديو يجي بعد آخر صورة

      if (imgs.length === 0 && !hasVideo) {
        mainArea.innerHTML = placeholderHTML();
        thumbsArea.innerHTML = '';
        thumbsArea.style.display = 'none';
        return;
      }

      // عرض المحتوى الرئيسي: صورة أو فيديو
      if (hasVideo && currentImgIndex === videoIndex) {
        mainArea.innerHTML = `
          <div class="relative w-full h-full bg-brand-900">
            <div class="absolute inset-0 flex items-center justify-center text-white/70 text-sm">
              <svg class="animate-spin h-8 w-8 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
              </svg>
            </div>
            <iframe class="relative w-full h-full" src="https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1"
              title="${currentProduct.name}" frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen></iframe>
          </div>`;
      } else {
        mainArea.innerHTML = `<img src="${imgs[currentImgIndex]}" alt="${currentProduct.name}" class="w-full h-full object-cover" />`;
      }

      // بناء المصغّرات: صور + مصغرة فيديو (إن وُجد)
      const totalItems = imgs.length + (hasVideo ? 1 : 0);
      if (totalItems > 1) {
        thumbsArea.style.display = 'flex';
        let html = imgs.map((img, i) => `
          <button onclick="swapModalImg(${i})"
            class="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition ${i === currentImgIndex ? 'border-brand-700' : 'border-transparent hover:border-brand-500'}">
            <img src="${img}" class="w-full h-full object-cover" />
          </button>
        `).join('');

        if (hasVideo) {
          html += `
            <button onclick="swapModalImg(${videoIndex})"
              class="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition relative ${videoIndex === currentImgIndex ? 'border-brand-700' : 'border-transparent hover:border-brand-500'}">
              <img src="https://i.ytimg.com/vi/${videoId}/hqdefault.jpg" class="w-full h-full object-cover" />
              <div class="absolute inset-0 bg-black/40 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </button>`;
        }
        thumbsArea.innerHTML = html;
      } else {
        thumbsArea.innerHTML = '';
        thumbsArea.style.display = 'none';
      }
    }

    function swapModalImg(index) {
      currentImgIndex = index;
      renderModalImages();
    }

    function closeProductModal() {
      const modal = document.getElementById('productModal');
      modal.classList.add('hidden');
      modal.classList.remove('flex');
      // نفرّغ منطقة الصورة/الفيديو الرئيسية لإيقاف الـ iframe (يمنع تشغيله في الخلفية)
      document.getElementById('modalMainImage').innerHTML = '';
    }
    // خطوة/حد أدنى للمنتج الحالي في المودال (يرجع 1/1 لو ما هو معرّف)
    function _modalStep() { return (currentProduct && currentProduct.qtyStep) || 1; }
    function _modalMin()  { return (currentProduct && currentProduct.minQty)  || _modalStep(); }

    function modalIncQty() {
      currentQty += _modalStep();
      document.getElementById('modalQty').value = currentQty;
    }
    function modalDecQty() {
      const min = _modalMin();
      if (currentQty - _modalStep() >= min) currentQty -= _modalStep();
      document.getElementById('modalQty').value = currentQty;
    }
    // أثناء الكتابة — نحدّث القيمة بدون تصحيح (نخلي المستخدم يكتب بحرية)
    function modalQtyInput(val) {
      const n = parseInt(val, 10);
      if (!isNaN(n) && n > 0) currentQty = n;
    }
    // عند مغادرة الخانة — نصلّح القيمة (حد أدنى + مضاعفات الخطوة لو موجودة)
    function modalQtyBlur() {
      const min  = _modalMin();
      const step = _modalStep();
      let n = parseInt(document.getElementById('modalQty').value, 10);
      if (isNaN(n) || n < min) n = min;
      // نقرّب لأعلى مضاعف للخطوة لو الخطوة > 1
      if (step > 1 && n % step !== 0) n = Math.ceil(n / step) * step;
      currentQty = n;
      document.getElementById('modalQty').value = n;
    }

    function addModalToCart() {
      if (!currentProduct) return;

      // إذا كان المنتج فيه شرائح NFC، تحقق من اكتمال التكوين (الشرائح القابلة للاختيار فقط)
      if (currentProduct.nfcSlots) {
        const layoutName = currentProduct.nfcSlots.layout;
        const allSlots = getAllSlots(layoutName);
        const customizableSlots = allSlots.filter(s => !s.locked);
        const filledCustomizable = customizableSlots.filter(s => currentNfcSelections[s.id]).length;
        if (filledCustomizable < customizableSlots.length) {
          if (!confirm(`اخترت ${filledCustomizable} من ${customizableSlots.length} شرائح قابلة للاختيار. هل تريد المتابعة بتكوين غير مكتمل؟`)) return;
        }
      }

      const nfcConfig = currentProduct.nfcSlots ? { ...currentNfcSelections } : null;
      const addonsConfig = [...currentSelectedAddons];

      // لو نفس المنتج بنفس التكوين ونفس الإضافات موجود، ازد الكمية
      const existing = cart.find(item =>
        item.productId === currentProduct.id &&
        nfcConfigsMatch(item.nfcSelections, nfcConfig) &&
        addonsMatch(item.addons, addonsConfig)
      );

      if (existing) {
        existing.qty += currentQty;
      } else {
        cart.push({
          id: genCartItemId(),
          productId: currentProduct.id,
          qty: currentQty,
          nfcSelections: nfcConfig,
          layout: currentProduct.nfcSlots ? currentProduct.nfcSlots.layout : null,
          addons: addonsConfig,
        });
      }

      saveCart();
      renderCart();
      closeProductModal();
      showToast(`تم إضافة ${currentQty} × ${currentProduct.name} للسلة`);
    }

    // -------------------------------------
    // حسابات الأسعار
    // -------------------------------------
    function calcSubtotal() {
      return cart.reduce((sum, item) => sum + calcLineTotal(item), 0);
    }
    function calcDiscountAmount(subtotal) {
      if (!appliedDiscount) return 0;
      if (appliedDiscount.type === 'percent') return Math.round(subtotal * appliedDiscount.value / 100);
      return Math.min(appliedDiscount.value, subtotal);
    }

    // -------------------------------------
    // السلة
    // -------------------------------------
    function toggleCart(open) {
      const drawer = document.getElementById('cartDrawer');
      if (open) drawer.classList.remove('hidden');
      else drawer.classList.add('hidden');
    }

    function confirmClearCart() {
      if (confirm('هل تريد تفريغ السلة والبدء من جديد؟')) clearCart();
    }

    function cartItemImage(p) {
      if (!p.images || p.images.length === 0) {
        return `<div class="w-16 h-16 rounded-lg bg-gradient-to-br from-brand-100 to-brand-50 flex-shrink-0"></div>`;
      }
      return `<div class="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0"><img src="${p.images[0]}" class="w-full h-full object-cover" /></div>`;
    }

    function renderCart() {
      const container = document.getElementById('cartItems');
      const badge = document.getElementById('cartBadge');
      const checkoutBtn = document.getElementById('checkoutBtn');
      const clearBtn = document.getElementById('clearCartBtn');
      const totalItems = totalCartItems();
      const subtotal = calcSubtotal();

      document.getElementById('cartTotalItems').textContent = totalItems;
      document.getElementById('cartTotalPrice').textContent = `${subtotal} ${CURRENCY}`;

      if (totalItems > 0) {
        badge.classList.remove('hidden');
        badge.textContent = totalItems;
        checkoutBtn.disabled = false;
        clearBtn.classList.remove('hidden');
      } else {
        badge.classList.add('hidden');
        checkoutBtn.disabled = true;
        clearBtn.classList.add('hidden');
      }

      if (cart.length === 0) {
        container.innerHTML = '<p class="text-center text-brand-500 py-16">سلتك فارغة الآن</p>';
        return;
      }

      container.innerHTML = cart.map(item => {
        const p = products.find(x => x.id === item.productId);
        const lineTotal = calcLineTotal(item);
        const nfcSummary = renderCartNfcSummary(item);
        const addonsSummary = renderCartAddonsSummary(item);
        const standBadge = p.includesStand
          ? `<div class="text-[10px] text-green-800 mb-1">🎁 مع حامل منصة مجاناً</div>`
          : '';
        // إخفاء السعر لو المنتج مؤشّر بـ hidePrice (مثل الميداليات)
        const priceHtml = p.hidePrice
          ? ''
          : `<span class="price-tag text-xs font-semibold text-brand-700">· ${lineTotal} ${CURRENCY}</span>`;
        return `
          <div class="flex gap-3 border border-brand-100 rounded-xl p-3">
            ${cartItemImage(p)}
            <div class="flex-1 min-w-0">
              <p class="font-semibold text-sm truncate">${p.name}</p>
              <div class="flex items-center gap-2 mb-1">
                <span class="text-xs text-brand-500">${p.category}</span>
                ${priceHtml}
              </div>
              ${standBadge}
              ${nfcSummary}
              ${addonsSummary}
              <div class="flex items-center justify-between mt-2">
                <div class="flex items-center border border-brand-100 rounded-lg">
                  <button onclick="cartDec('${item.id}')" class="px-2 py-0.5 text-sm hover:bg-brand-50">−</button>
                  <input type="number" inputmode="numeric" min="1" value="${item.qty}"
                         oninput="cartQtyInput('${item.id}', this.value)"
                         onblur="cartQtyBlur('${item.id}')"
                         onfocus="this.select()"
                         class="qty-input px-1 py-0.5 border-x border-brand-100 text-sm w-14 text-center focus:outline-none focus:bg-brand-50" />
                  <button onclick="cartInc('${item.id}')" class="px-2 py-0.5 text-sm hover:bg-brand-50">+</button>
                </div>
                <button onclick="cartRemove('${item.id}')" class="text-xs text-red-500 hover:underline">حذف</button>
              </div>
            </div>
          </div>
        `;
      }).join('');
    }

    function renderCartNfcSummary(item) {
      if (!item.nfcSelections || Object.keys(item.nfcSelections).length === 0) return '';
      const parts = Object.keys(item.nfcSelections).map(sid => {
        const opt = NFC_OPTIONS[item.nfcSelections[sid]];
        return `<div class="flex items-center gap-1"><span class="inline-block w-3.5 h-3.5 text-brand-900">${opt.icon}</span><span>${opt.label}</span></div>`;
      });
      return `<div class="flex flex-wrap gap-x-3 gap-y-1 text-[11px] text-brand-900 bg-brand-50 rounded p-1.5 mb-1">${parts.join('')}</div>`;
    }

    function renderCartAddonsSummary(item) {
      if (!item.addons || item.addons.length === 0) return '';
      const p = products.find(x => x.id === item.productId);
      const parts = item.addons.map(addonId => {
        const addon = (p.addons || []).find(a => a.id === addonId);
        if (!addon) return '';
        return `<span class="inline-block bg-green-50 text-green-800 px-1.5 py-0.5 rounded text-[10px]">+ ${addon.label}</span>`;
      }).filter(Boolean);
      if (parts.length === 0) return '';
      return `<div class="flex flex-wrap gap-1 mb-1">${parts.join('')}</div>`;
    }

    function cartInc(itemId) {
      const item = cart.find(x => x.id === itemId);
      if (!item) return;
      const p = products.find(x => x.id === item.productId);
      const step = (p && p.qtyStep) || 1;
      item.qty += step;
      saveCart(); renderCart();
    }
    function cartDec(itemId) {
      const item = cart.find(x => x.id === itemId);
      if (!item) return;
      const p = products.find(x => x.id === item.productId);
      const step = (p && p.qtyStep) || 1;
      const minQty = (p && p.minQty) || step;
      if (item.qty > minQty) item.qty -= step;
      else cart = cart.filter(x => x.id !== itemId);
      saveCart();
      renderCart();
    }
    function cartRemove(itemId) {
      cart = cart.filter(x => x.id !== itemId);
      saveCart();
      renderCart();
    }

    // كتابة مباشرة للكمية داخل السلة — نحدّث الرقم أثناء الكتابة بدون renderCart
    // (renderCart يعيد بناء الـ HTML فيفقد التركيز على الخانة)
    function cartQtyInput(itemId, val) {
      const item = cart.find(x => x.id === itemId);
      if (!item) return;
      const n = parseInt(val, 10);
      if (!isNaN(n) && n > 0) {
        item.qty = n;
        saveCart();
        updateCartTotalsOnly(); // نحدّث المجاميع فقط بدون إعادة رسم كامل
      }
    }
    // عند مغادرة الخانة — نصلّح الرقم (حد أدنى + مضاعفات الخطوة) ثم نعيد رسم السلة
    function cartQtyBlur(itemId) {
      const item = cart.find(x => x.id === itemId);
      if (!item) return;
      const p = products.find(x => x.id === item.productId);
      const step   = (p && p.qtyStep) || 1;
      const minQty = (p && p.minQty)  || step;
      let n = item.qty;
      if (isNaN(n) || n < minQty) n = minQty;
      if (step > 1 && n % step !== 0) n = Math.ceil(n / step) * step;
      item.qty = n;
      saveCart();
      renderCart();
    }
    // تحديث المجاميع فقط (بدون إعادة بناء عناصر السلة) — عشان الخانة اللي فيها التركيز ما تختفي أثناء الكتابة
    function updateCartTotalsOnly() {
      const totalItems = totalCartItems();
      const subtotal = calcSubtotal();
      const totalItemsEl = document.getElementById('cartTotalItems');
      const totalPriceEl = document.getElementById('cartTotalPrice');
      const badge = document.getElementById('cartBadge');
      if (totalItemsEl) totalItemsEl.textContent = totalItems;
      if (totalPriceEl) totalPriceEl.textContent = `${subtotal} ${CURRENCY}`;
      if (badge && totalItems > 0) badge.textContent = totalItems;
    }

    // -------------------------------------
    // ترقيات السلة (upsells)
    // -------------------------------------
    let _medalsPendingQty = 10;

    function medalsQtyChange(delta) {
      _medalsPendingQty = Math.max(10, _medalsPendingQty + delta);
      const el = document.getElementById('medalsQtyDisplay');
      if (el) el.value = _medalsPendingQty;
    }
    // كتابة مباشرة — نسمح بأي رقم أثناء الكتابة، ونصلّح عند مغادرة الخانة
    function medalsQtyInput(val) {
      const n = parseInt(val, 10);
      if (!isNaN(n) && n > 0) _medalsPendingQty = n;
    }
    function medalsQtyBlur() {
      let n = parseInt(document.getElementById('medalsQtyDisplay').value, 10);
      if (isNaN(n) || n < 10) n = 10;
      // نقرّب لأعلى مضاعف للـ 10 (الميداليات تُطلب بمضاعفات 10 فقط)
      if (n % 10 !== 0) n = Math.ceil(n / 10) * 10;
      _medalsPendingQty = n;
      document.getElementById('medalsQtyDisplay').value = n;
    }

    function addMedalsToCart() {
      const medals = products.find(x => x.id === 'p7');
      if (!medals) return;
      // لو موجودة أصلاً بالسلة، نجمع الكمية على نفس السطر
      const existing = cart.find(x => x.productId === 'p7');
      if (existing) {
        existing.qty += _medalsPendingQty;
      } else {
        cart.push({
          id: genCartItemId(),
          productId: 'p7',
          qty: _medalsPendingQty,
          nfcSelections: {},
          layout: null,
          addons: [],
        });
      }
      saveCart();
      renderCart();
      showToast(`تم إضافة ${_medalsPendingQty} ميدالية للسلة`);
      _medalsPendingQty = 10;
      const el = document.getElementById('medalsQtyDisplay');
      if (el) el.value = 10;
    }

    function addMiniAsCard() {
      const mini = products.find(x => x.id === 'p6');
      if (!mini) return;
      // لو موجودة كبطاقة شخصية (بدون شرائح مختارة)، نزيد الكمية بدل تكرار السطر
      const existing = cart.find(x =>
        x.productId === 'p6' &&
        (!x.nfcSelections || Object.keys(x.nfcSelections).length === 0) &&
        (!x.addons || x.addons.length === 0)
      );
      if (existing) {
        existing.qty += 1;
      } else {
        cart.push({
          id: genCartItemId(),
          productId: 'p6',
          qty: 1,
          nfcSelections: {},
          layout: mini.nfcSlots ? mini.nfcSlots.layout : null,
          addons: [],
        });
      }
      saveCart();
      renderCart();
      showToast('تم إضافة أوراف ميني كبطاقة شخصية');
    }

    // -------------------------------------
    // Checkout
    // -------------------------------------
    function openCheckout() {
      if (cart.length === 0) return;
      toggleCart(false);
      refreshCheckoutTotals();
      const modal = document.getElementById('checkoutModal');
      modal.classList.remove('hidden');
      modal.classList.add('flex');
    }
    function closeCheckout() {
      const modal = document.getElementById('checkoutModal');
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    }

    function refreshCheckoutTotals() {
      const subtotal = calcSubtotal();
      const discountAmount = calcDiscountAmount(subtotal);
      const total = subtotal - discountAmount;
      document.getElementById('checkoutSubtotal').textContent = `${subtotal} ${CURRENCY}`;
      document.getElementById('checkoutTotal').textContent = `${total} ${CURRENCY}`;
      const discountRow = document.getElementById('checkoutDiscountRow');
      if (appliedDiscount && discountAmount > 0) {
        discountRow.classList.remove('hidden');
        document.getElementById('checkoutDiscountLabel').textContent = appliedDiscount.label;
        document.getElementById('checkoutDiscountAmount').textContent = `- ${discountAmount} ${CURRENCY}`;
      } else {
        discountRow.classList.add('hidden');
      }
    }

    function applyDiscount() {
      const input = document.getElementById('f_discount');
      const feedback = document.getElementById('discountFeedback');
      const code = input.value.trim().toUpperCase();
      if (!code) {
        appliedDiscount = null;
        feedback.classList.add('hidden');
        refreshCheckoutTotals();
        return;
      }
      const found = DISCOUNT_CODES[code];
      feedback.classList.remove('hidden');
      if (found) {
        appliedDiscount = { code, ...found };
        feedback.textContent = `✓ تم تطبيق الخصم ${found.label}`;
        feedback.className = 'text-xs mt-1 text-green-700';
      } else {
        appliedDiscount = null;
        feedback.textContent = '✗ كود الخصم غير صحيح';
        feedback.className = 'text-xs mt-1 text-red-500';
      }
      refreshCheckoutTotals();
    }

    // -------------------------------------
    // إرسال الطلب عبر واتساب
    // -------------------------------------
    function submitOrder() {
      const name = document.getElementById('f_name').value.trim();
      const business = document.getElementById('f_business').value.trim();
      const city = document.getElementById('f_city').value.trim();
      const phone = document.getElementById('f_phone').value.trim();
      const notes = document.getElementById('f_notes').value.trim();

      if (!name || !business || !city || !phone) { alert('الرجاء تعبئة جميع الحقول المطلوبة'); return; }
      if (!/^05[0-9]{8}$/.test(phone)) { alert('الرجاء إدخال رقم جوال سعودي صحيح (يبدأ بـ 05 و10 أرقام)'); return; }

      const NL = '\n';
      let msg = `*طلب جديد من ${BRAND_NAME}*${NL}${NL}`;
      msg += `الاسم: ${name}${NL}`;
      msg += `المحل: ${business}${NL}`;
      msg += `المدينة: ${city}${NL}`;
      msg += `الجوال: ${phone}${NL}${NL}`;
      msg += `*المنتجات المطلوبة:*${NL}${NL}`;

      const subtotal = calcSubtotal();
      cart.forEach((item, itemIdx) => {
        const p = products.find(x => x.id === item.productId);
        const lineTotal = calcLineTotal(item);

        // سطر المنتج الرئيسي (متعدّد الأسطر بمسمّيات عربية لتفادي كسر اتجاه النص)
        msg += `• ${p.name}${NL}`;
        msg += `   الكمية: ${item.qty}${NL}`;
        if (SHOW_PRICES && !p.hidePrice) {
          msg += `   المجموع: ${lineTotal} ${CURRENCY}${NL}`;
        }

        // تفصيل التسعير المتدرّج
        if (SHOW_PRICES && p.priceTiers && p.priceTiers.length > 1) {
          const breakdown = buildTierBreakdown(p, item.qty);
          if (breakdown) msg += `   التسعير: ${breakdown}${NL}`;
        }

        // شرائح NFC
        if (item.nfcSelections && Object.keys(item.nfcSelections).length > 0) {
          msg += `   الشرائح:${NL}`;
          Object.keys(item.nfcSelections).forEach(sid => {
            const opt = NFC_OPTIONS[item.nfcSelections[sid]];
            const slotLabel = getSlotLabel(item.layout, sid);
            msg += `      • ${slotLabel}: ${opt.label}${NL}`;
          });
        }

        // الإضافات
        if (item.addons && item.addons.length > 0) {
          const validAddons = item.addons.map(id => (p.addons || []).find(a => a.id === id)).filter(Boolean);
          if (validAddons.length > 0) {
            msg += `   إضافات:${NL}`;
            validAddons.forEach(addon => {
              if (SHOW_PRICES) msg += `      • ${addon.label} — يضيف ${addon.price} ${CURRENCY} لكل قطعة${NL}`;
              else msg += `      • ${addon.label}${NL}`;
            });
          }
        }

        // حامل منصة مجاني
        if (p.includesStand) {
          msg += `   يشمل حامل منصة مجاناً${NL}`;
        }

        // فاصل بين المنتجات
        if (itemIdx < cart.length - 1) msg += NL;
      });

      if (SHOW_PRICES) {
        msg += `${NL}*الملخص المالي:*${NL}`;
        msg += `المجموع الفرعي: ${subtotal} ${CURRENCY}${NL}`;
        if (appliedDiscount) {
          const discountAmount = calcDiscountAmount(subtotal);
          msg += `كود الخصم: ${appliedDiscount.code} ${appliedDiscount.label}${NL}`;
          msg += `قيمة الخصم: -${discountAmount} ${CURRENCY}${NL}`;
          msg += `*الإجمالي: ${subtotal - discountAmount} ${CURRENCY}*${NL}`;
        } else {
          msg += `*الإجمالي: ${subtotal} ${CURRENCY}*${NL}`;
        }
      }

      if (notes) msg += `${NL}الملاحظات: ${notes}${NL}`;
      msg += `${NL}سأرفق شعار المحل في الرسالة القادمة.`;

      // تذييل مصدر العميل (يظهر فقط إذا كان هناك كود مسوّق مخزّن)
      const refCode = getActiveRefCode();
      if (refCode) {
        msg += `${NL}${NL}━━━━━━━━━━━━━━━${NL}`;
        msg += `أتى العميل عن طريق: ${refCode}${NL}`;
        msg += `━━━━━━━━━━━━━━━`;
      }

      const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
      window.open(url, '_blank');
      closeCheckout();
      showToast('تم فتح واتساب — أرفق شعارك في المحادثة وأرسل. سلتك محفوظة.');
    }

    function showToast(msg) {
      const t = document.getElementById('toast');
      t.textContent = msg;
      t.classList.remove('hidden');
      setTimeout(() => t.classList.add('hidden'), 3200);
    }

    // -------------------------------------
    // ضيف
    // -------------------------------------
    (function initGuest() {
      let guest = localStorage.getItem('aorav_guest');
      if (!guest) {
        guest = 'زائر #' + Math.floor(1000 + Math.random() * 9000);
        localStorage.setItem('aorav_guest', guest);
      }
    })();

    // -------------------------------------
    // تفعيل الشعار واسم البراند والفيديو
    // -------------------------------------
    function initBranding() {
      document.getElementById('brandLogo').innerHTML = BRAND_LOGO;
      document.getElementById('brandName').textContent = BRAND_NAME;
      document.getElementById('brandTagline').textContent = BRAND_TAGLINE;
      document.title = `${BRAND_NAME} — ${BRAND_TAGLINE}`;
    }

    function initVideo() {
      if (!YOUTUBE_VIDEO_ID) return;
      const section = document.getElementById('videoSection');
      document.getElementById('videoTitle').textContent = VIDEO_SECTION_TITLE;
      document.getElementById('videoDesc').textContent = VIDEO_SECTION_DESC;

      // صورة مصغّرة من يوتيوب (نجرّب maxresdefault، وإذا فشلت نستخدم hqdefault كبديل)
      const thumb = document.getElementById('videoThumb');
      thumb.src = `https://i.ytimg.com/vi/${YOUTUBE_VIDEO_ID}/maxresdefault.jpg`;
      thumb.onerror = () => { thumb.src = `https://i.ytimg.com/vi/${YOUTUBE_VIDEO_ID}/hqdefault.jpg`; thumb.onerror = null; };
      thumb.alt = VIDEO_SECTION_TITLE;

      section.classList.remove('hidden');
    }

    function initClients() {
      if (!CLIENT_LOGOS || CLIENT_LOGOS.length === 0) return;
      const section = document.getElementById('clientsSection');
      const track = document.getElementById('clientsTrack');
      document.getElementById('clientsTitle').textContent = CLIENTS_SECTION_TITLE;

      // نكرّر الشعارات مرتين لعمل حلقة سلسة (بدون قفزة)
      const buildLogo = (logo) => {
        const img = document.createElement('img');
        img.src = logo.src;
        img.alt = logo.name || 'client logo';
        img.title = logo.name || '';
        img.loading = 'lazy';
        // لو الشعار ما حمّل (اسم ملف غلط أو مفقود) نخفيه بدل ما يترك فراغ في الشريط
        img.onerror = () => { img.style.display = 'none'; };
        return img;
      };
      [...CLIENT_LOGOS, ...CLIENT_LOGOS].forEach(logo => track.appendChild(buildLogo(logo)));

      section.classList.remove('hidden');
    }

    // تشغيل الفيديو داخل الصفحة عند الضغط (نمط "facade")
    // الصفحة تحمل بسرعة (صورة فقط) ولما العميل يضغط، iframe يوتيوب يشتغل مع autoplay
    // نستخدم youtube-nocookie للخصوصية وأحياناً يتخطى قيود التضمين
    function playVideoInline() {
      const container = document.getElementById('videoContainer');
      // إذا سبق تشغيل، لا نعيد الإنشاء
      if (container.querySelector('iframe')) return;

      const iframe = document.createElement('iframe');
      iframe.src = `https://www.youtube-nocookie.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`;
      iframe.className = 'absolute inset-0 w-full h-full';
      iframe.setAttribute('title', VIDEO_SECTION_TITLE);
      iframe.setAttribute('frameborder', '0');
      iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
      iframe.setAttribute('allowfullscreen', '');
      container.appendChild(iframe);

      // إخفاء زر التشغيل والصورة المصغّرة بعد بدء التشغيل
      container.style.cursor = 'default';
      container.onclick = null;

      // فعّل مراقب الشاشة (لو مو مفعّل) — يوقف الفيديو تلقائياً لما يخرج من الرؤية
      setupBottomVideoObserver();
    }

    // يوقف الفيديو السفلي بحذف الـ iframe (اليوتيوب ما عنده postMessage stop إلا مع API كامل)
    function stopBottomVideo() {
      const container = document.getElementById('videoContainer');
      if (!container) return;
      const iframe = container.querySelector('iframe');
      if (iframe) iframe.remove();
      // نرجّع الحاوية لحالة "قابلة للنقر" عشان العميل يقدر يشغّله مرة ثانية
      container.style.cursor = 'pointer';
      container.onclick = playVideoInline;
    }

    // مراقب: لما الفيديو السفلي يخرج من الرؤية (المستخدم رجّع للأعلى) نوقفه
    let _bottomVideoObserver = null;
    function setupBottomVideoObserver() {
      if (_bottomVideoObserver) return; // مفعّل مسبقاً
      const section = document.getElementById('videoSection');
      if (!section) return;
      _bottomVideoObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          // لو الفيديو ما بقى منه إلا أقل من 20% ظاهر → أوقفه
          if (entry.intersectionRatio < 0.2) stopBottomVideo();
        });
      }, { threshold: [0, 0.2, 0.5, 1] });
      _bottomVideoObserver.observe(section);
    }

    // بدء
    initBranding();
    initVideo();
    initClients();
    renderProducts();
    loadCart();
    renderCart();

/* ═══════════════════════════════════════════════════════════════════
 * 🌐 [12] نظام الترجمة (عربي / إنجليزي)
 * ══════════════════════════════════════════════════════════════════ */
  (function() {
    'use strict';

    // ───────────────────────────────
    // ترجمات النصوص الثابتة (تطابق حرفي)
    // ───────────────────────────────
    const AR_TO_EN = {
      // Header
      'أهلاً بك،': 'Welcome,',
      'ضيفنا الكريم': 'Dear Guest',
      'السلة': 'Cart',

      // Hero
      'افتتاح كاتالوج AORAV': 'AORAV Catalog Launch',
      'أهلاً بك في متجرنا': 'Welcome to Our Store',
      'منتجات مخصصة تحمل شعارك، مصنوعة بالطباعة ثلاثية الأبعاد في بينبع. تقنية NFC مدمجة تربط زبونك بحساباتك بلمسة واحدة.':
        'Custom products with your logo, 3D-printed in Yanbu. Integrated NFC technology connects your customer to your accounts with a single tap.',
      'تصفّح المنتجات': 'Browse Products',

      // Clients
      'اختاروا AORAV': 'They Chose AORAV',

      // Products section
      'منتجاتنا': 'Our Products',
      'اضغط على المنتج لعرض التفاصيل وإضافته للسلة': 'Tap a product to view details and add to cart',
      'اضغط للتفاصيل': 'Tap for details',

      // Video
      'تعرّف على منتجاتنا': 'Meet Our Products',
      'شاهد كيف نصمّم ونصنع منتجاتنا المخصصة يدوياً في بينبع': 'See how we design and craft our custom products by hand in Yanbu',
      'اضغط للتشغيل': 'Tap to play',

      // Product modal
      '🎁 يشمل حامل منصة مجاناً': '🎁 Includes a free display stand',
      'المواصفات': 'Specifications',
      'الكمية': 'Quantity',
      'أضف إلى السلة': 'Add to Cart',
      'اختر محتوى شرائح NFC': 'Choose NFC Chip Content',
      'اضغط أي شريحة قابلة للاختيار لتحديد محتواها.': 'Tap any customizable chip to set its content.',
      'إضافات اختيارية': 'Optional Add-ons',
      '-- بلا اختيار --': '-- No selection --',
      'مقفل': 'Locked',

      // Cart drawer
      'سلتك': 'Your Cart',
      'سلتك فارغة الآن': 'Your cart is empty',
      'أضف لطلبك': 'Add to your order',
      'ميداليات مخصصة بشعارك': 'Custom Medals with Your Logo',
      'قطع مميزة بشعار محلك — الكمية بمضاعفات 10': 'Distinctive pieces with your store logo — quantity in multiples of 10',
      'أضف للسلة': 'Add to Cart',
      'أضفها كبطاقة شخصية': 'Add as a Personal Card',
      'أوراف ميني — بطاقة NFC محمولة تحمل هويتك في جيبك': 'AORAV Mini — a portable NFC card carrying your identity in your pocket',
      'مجموع القطع': 'Total Items',
      'المجموع': 'Total',
      'ارسل الطلب بدون دفع على الواتس اب': 'Send order via WhatsApp (no payment)',
      'بدء طلب جديد (تفريغ السلة)': 'Start a new order (clear cart)',
      'حذف': 'Remove',
      '🎁 مع حامل منصة مجاناً': '🎁 With a free display stand',

      // Checkout modal
      'إتمام الطلب': 'Complete Order',
      'املأ بياناتك، وسنفتح لك واتساب برسالة طلب جاهزة. أرفق شعارك في المحادثة وأرسل.':
        'Fill in your details, and we\'ll open WhatsApp with a prepared order message. Attach your logo in the chat and send.',
      'الاسم': 'Name',
      'اسم المحل التجاري': 'Business Name',
      'المدينة': 'City',
      'مثال: ينبع، جدة، الرياض': 'e.g. Yanbu, Jeddah, Riyadh',
      'رقم الجوال': 'Mobile Number',
      'رقم سعودي يبدأ بـ 05': 'Saudi number starting with 05',
      'كود الخصم': 'Discount Code',
      '(اختياري)': '(optional)',
      'تطبيق': 'Apply',
      'ملاحظات إضافية': 'Additional Notes',
      'المجموع الفرعي': 'Subtotal',
      'الخصم': 'Discount',
      'الإجمالي': 'Total',
      'إرسال عبر واتساب': 'Send via WhatsApp',
      'سيفتح واتساب برسالة جاهزة — أرفق شعارك (PDF/صورة) وأرسل':
        'WhatsApp will open with a prepared message — attach your logo (PDF/image) and send',
      '✗ كود الخصم غير صحيح': '✗ Invalid discount code',

      // Footer
      'نصمم ونصنع حوامل طاولات ذكية مطبوعة 3D ومخصصة بالكامل لعلامتك التجارية، تنقل عملاءك بلمسة جوال واحدة إلى صفحة تقييم جوجل، السوشيال ميديا، والمنيو الرقمي.':
        'We design and manufacture smart 3D-printed table stands fully customized to your brand, taking your customers with a single tap to your Google review page, social media, and digital menu.',
      'تواصل معنا': 'Contact Us',
      'تسويق بالعمولة': 'Affiliate Marketing',
      'هل أنت مسوق أو صانع محتوى؟ انضم لبرنامج العمولة الخاص بنا واربح على كل عميل تجلبه.':
        'Are you a marketer or content creator? Join our affiliate program and earn on every customer you bring.',
      'تواصل عبر الإيميل': 'Contact via Email',
      '© AORAV — ينبع، المملكة العربية السعودية': '© AORAV — Yanbu, Saudi Arabia',
      'منتجات مخصصة بتقنية NFC': 'Custom NFC-enabled products',

      // Brand tagline
      'منتجات مخصصة بشعارك': 'Custom Products with Your Logo',

      // Placeholder image label
      'صورة المنتج': 'Product image',

      // Discount code label
      '(الاحتفالية 10%)': '(Anniversary 10%)',

      // Toast messages
      'تم تفريغ السلة': 'Cart cleared',
      'تم إضافة أوراف ميني كبطاقة شخصية': 'AORAV Mini added as a personal card',
      'تم فتح واتساب — أرفق شعارك في المحادثة وأرسل. سلتك محفوظة.':
        'WhatsApp opened — attach your logo in the chat and send. Your cart is saved.',

      // Alert / confirm messages
      'الرجاء تعبئة جميع الحقول المطلوبة': 'Please fill in all required fields',
      'الرجاء إدخال رقم جوال سعودي صحيح (يبدأ بـ 05 و10 أرقام)':
        'Please enter a valid Saudi mobile number (starts with 05, 10 digits)',
      'هل تريد تفريغ السلة والبدء من جديد؟': 'Do you want to clear the cart and start over?',
    };

    // Placeholders (form inputs)
    const AR_TO_EN_ATTR = {
      'أدخل الكود إن وجد': 'Enter code if any',
      '05xxxxxxxx': '05xxxxxxxx',
    };

    // ───────────────────────────────
    // ترجمات المنتجات
    // ───────────────────────────────
    const PROD_EN = {
      p1: {
        name: 'AORAV Prime',
        category: 'Stands',
        badge: 'Our pick for cafés & restaurants',
        shortDesc: 'Elegant stand with 5 NFC chips — top chip locked to Google Maps, 4 customizable.',
        description: '<strong>The most luxurious digital front for your guests.</strong><br><br>Turn every table into a complete interaction point worthy of your hospitality. The "Prime" stand is <strong>the elite choice</strong>, combining premium 3D-printed branding with 5-chip NFC technology, putting all your channels (menu, review, social media) at your customer\'s fingertip with <strong>a single tap</strong>.',
        specs: [
          '5 NFC chips (1 locked + 4 customizable)',
          'PLA material',
          'Your logo 3D-printed on the front',
          'Chips pre-programmed',
        ],
        addons: {
          engraved_name: 'Store name embossed 3D print',
          silicone_base: 'Silicone anti-slip base',
        },
      },
      p2: {
        name: 'Custom Napkin Holder',
        category: 'Table Accessories',
        shortDesc: 'Napkin holder with 2 NFC chips and your logo — the more you order, the lower the price.',
        description: '<strong>Invest your table space smartly.</strong><br><br>Two birds with one stone: a luxurious hotel-grade napkin holder printed with your logo, and a built-in digital marketing station with 2 NFC chips. Turn the most-used item on the table into a tool that <strong>boosts your reviews and sales</strong> every day.',
        specs: [
          '2 customizable NFC chips',
          'Size: 15×10 cm',
          'PLA material',
          'Your logo 3D-printed',
        ],
        addons: {
          qr_back: 'QR code on the back',
          gift_wrap: 'Gift wrapping',
        },
      },
      p3: {
        name: 'AORAV Classic',
        category: 'Stands',
        shortDesc: 'The classic stand with 2 NFC chips — top chip is Google Maps, bottom is customizable.',
        description: 'The original AORAV design — an elegant stand with 2 NFC chips. The top chip is always programmed to your Google Maps location, and you freely choose the bottom chip\'s content from the available options.',
        specs: [
          '2 NFC chips (top locked + bottom customizable)',
          'PLA material',
          'Your logo 3D-printed on the front',
          'Pre-programmed',
        ],
        addons: {
          engraved_name: 'Store name embossed 3D print',
          silicone_base: 'Silicone anti-slip base',
        },
      },
      p4: {
        name: 'AORAV Core',
        category: 'Stands',
        shortDesc: 'The mid-tier with 4 fully customizable NFC chips — you pick all four.',
        description: '<strong>Full flexibility in your hands.</strong><br><br>We designed the "Core" stand to give you <strong>complete control</strong> of your digital front. With 4 fully customizable NFC chips, you can direct your customers to any link you want, with a 3D design that showcases the strength of your brand on every table.',
        specs: [
          '4 NFC chips, all customizable',
          'Durable PLA+ material',
          'Your logo 3D-printed on the front',
          'Pre-programmed',
        ],
        addons: {
          engraved_name: 'Store name embossed 3D print',
          silicone_base: 'Silicone anti-slip base',
        },
      },
      p5: {
        name: 'AORAV Slim',
        category: 'Stands',
        badge: 'The easiest and most comfortable',
        shortDesc: 'The slim stand with 3 NFC chips — the large middle one locked to Google Maps.',
        description: '<strong>Elegance in its simplest form.</strong><br><br>If you\'re looking for a modern design that takes minimal table space but does the job excellently, the "Slim" stand is <strong>your smartest choice</strong>. We focused on capturing reviews through the central Google chip, with two additional chips for menu and social media, in a slim and practical design.',
        specs: [
          '3 NFC chips (large locked middle + 2 customizable sides)',
          'PLA material',
          'Your logo 3D-printed',
          'Pre-programmed',
        ],
        addons: {
          engraved_name: 'Store name embossed 3D print',
          silicone_base: 'Silicone anti-slip base',
        },
      },
      p6: {
        name: 'AORAV Mini',
        category: 'Portable Cards',
        badge: 'Light and simple',
        shortDesc: 'The portable card with 2 NFC chips — small enough for a pocket.',
        description: '<strong>Your digital front that never leaves you.</strong><br><br>Your ideal companion at exhibitions, events, or even in your pocket. "AORAV Mini" is <strong>your smart, compact business card</strong>, carrying your identity and 2 NFC chips to share your review page or accounts with a single tap wherever you go.',
        specs: [
          '2 customizable NFC chips',
          'PLA material',
          'Your logo 3D-printed',
          'Pocket-friendly size',
        ],
        addons: {
          engraved_name: 'Store name embossed 3D print',
          silicone_base: 'Silicone anti-slip base',
        },
      },
      p7: {
        name: 'Custom Medals with Your Logo',
        category: 'Add-ons',
        shortDesc: 'Metal medals with your store\'s logo — ordered in multiples of 10.',
      },
      p8: {
        name: 'Exhibitions Bundle — Mini Stand & Smart Medal',
        category: 'Personal Accessories',
        badge: 'for exhibition visitors',
        shortDesc: 'A pocket-sized mini stand and a personal medal with an NFC chip for your personal links.',
        description: 'Share your personal accounts at exhibitions quickly — through the medal or the pocket-sized mini stand. NFC technology, share your links and make the most of the exhibition season.',
        specs: [
          '2 customizable NFC chips',
          'Medal + mini stand',
          'PLA material',
        ],
        addons: {
          custom_logo: 'Your logo 3D-printed',
          gift_wrap: 'Gift wrapping',
        },
      },
    };

    // ───────────────────────────────
    // NFC options translations
    // ───────────────────────────────
    const NFC_EN = {
      google_maps: 'Google Maps',
      snap: 'Snapchat',
      tiktok: 'TikTok',
      whatsapp: 'WhatsApp',
      facebook: 'Facebook',
      instagram: 'Instagram',
      documents: 'Documents',
      menu: 'Menu',
      linktree: 'Linktree - Links Page',
      app_download: 'App Download',
      loyalty_points: 'Loyalty Points',
      online_store: 'Online Store',
    };

    // ───────────────────────────────
    // Layout slot label translations
    // ───────────────────────────────
    const SLOTS_EN = {
      'العلوي': 'Top',
      'الوسط الأيمن': 'Middle Right',
      'الوسط الأيسر': 'Middle Left',
      'السفلي الأيمن': 'Bottom Right',
      'السفلي الأيسر': 'Bottom Left',
      'العلوي الأيمن': 'Top Right',
      'العلوي الأيسر': 'Top Left',
      'السفلي': 'Bottom',
      'اليمين': 'Right',
      'اليسار': 'Left',
      'الوسط': 'Middle',
    };

    // ───────────────────────────────
    // Reverse maps (EN -> AR) for switching back
    // ───────────────────────────────
    const EN_TO_AR = Object.fromEntries(Object.entries(AR_TO_EN).map(([a, e]) => [e, a]));
    const EN_TO_AR_ATTR = Object.fromEntries(Object.entries(AR_TO_EN_ATTR).map(([a, e]) => [e, a]));

    // ───────────────────────────────
    // Dynamic pattern translations
    // ───────────────────────────────
    // (order matters — more specific first)
    const AR_PATTERNS = [
      { re: /^اخترت (\d+) من (\d+) شرائح قابلة للاختيار\. هل تريد المتابعة بتكوين غير مكتمل\?$/,
        gen: m => `You selected ${m[1]} of ${m[2]} customizable chips. Do you want to continue with an incomplete configuration?` },
      { re: /^تم إضافة (\d+) ميدالية للسلة$/, gen: m => `Added ${m[1]} medals to the cart` },
      { re: /^تم إضافة (\d+) × (.+) للسلة$/, gen: m => `Added ${m[1]} × ${m[2]} to the cart` },
      { re: /^تم بيعه (\d+) مرة$/, gen: m => `Sold ${m[1]} times` },
      { re: /^(\d+) \/ (\d+) قابلة للاختيار$/, gen: m => `${m[1]} / ${m[2]} customizable` },
      { re: /^✓ تم تطبيق الخصم (.+)$/, gen: m => `✓ Discount applied ${m[1]}` },
      { re: /^أول (\d+) قطعة بسعر (\d+) ر\.س، ما بعدها بسعر (\d+) ر\.س لكل قطعة$/,
        gen: m => `First ${m[1]} pcs at ${m[2]} SAR, then ${m[3]} SAR each` },
      { re: /^- (\d+(?:\.\d+)?) ر\.س$/, gen: m => `- ${m[1]} SAR` },
      { re: /^\+(\d+(?:\.\d+)?) ر\.س$/, gen: m => `+${m[1]} SAR` },
      { re: /^· (\d+(?:\.\d+)?) ر\.س$/, gen: m => `· ${m[1]} SAR` },
      { re: /^(\d+(?:\.\d+)?) ر\.س$/, gen: m => `${m[1]} SAR` },
    ];

    const EN_PATTERNS = [
      { re: /^You selected (\d+) of (\d+) customizable chips\. Do you want to continue with an incomplete configuration\?$/,
        gen: m => `اخترت ${m[1]} من ${m[2]} شرائح قابلة للاختيار. هل تريد المتابعة بتكوين غير مكتمل؟` },
      { re: /^Added (\d+) medals to the cart$/, gen: m => `تم إضافة ${m[1]} ميدالية للسلة` },
      { re: /^Added (\d+) × (.+) to the cart$/, gen: m => `تم إضافة ${m[1]} × ${m[2]} للسلة` },
      { re: /^Sold (\d+) times$/, gen: m => `تم بيعه ${m[1]} مرة` },
      { re: /^(\d+) \/ (\d+) customizable$/, gen: m => `${m[1]} / ${m[2]} قابلة للاختيار` },
      { re: /^✓ Discount applied (.+)$/, gen: m => `✓ تم تطبيق الخصم ${m[1]}` },
      { re: /^First (\d+) pcs at (\d+) SAR, then (\d+) SAR each$/,
        gen: m => `أول ${m[1]} قطعة بسعر ${m[2]} ر.س، ما بعدها بسعر ${m[3]} ر.س لكل قطعة` },
      { re: /^- (\d+(?:\.\d+)?) SAR$/, gen: m => `- ${m[1]} ر.س` },
      { re: /^\+(\d+(?:\.\d+)?) SAR$/, gen: m => `+${m[1]} ر.س` },
      { re: /^· (\d+(?:\.\d+)?) SAR$/, gen: m => `· ${m[1]} SAR` },
      { re: /^(\d+(?:\.\d+)?) SAR$/, gen: m => `${m[1]} ر.س` },
    ];

    // ───────────────────────────────
    // State
    // ───────────────────────────────
    let currentLang = 'ar';
    let observer = null;

    // Backup Arabic values so we can restore
    let productsBackup = null;
    let nfcBackup = null;
    let layoutsBackup = null;

    function backupOnce() {
      if (productsBackup) return;
      productsBackup = products.map(p => JSON.parse(JSON.stringify(p)));
      nfcBackup = {};
      Object.keys(NFC_OPTIONS).forEach(k => nfcBackup[k] = NFC_OPTIONS[k].label);
      layoutsBackup = {};
      Object.keys(LAYOUT_DEFINITIONS).forEach(lk => {
        layoutsBackup[lk] = LAYOUT_DEFINITIONS[lk].rows.map(row =>
          row.slots.map(s => s.label)
        );
      });
    }

    function applyDataForLang(lang) {
      backupOnce();

      // Products
      products.forEach((p, idx) => {
        const en = PROD_EN[p.id];
        const ar = productsBackup[idx];
        if (lang === 'en' && en) {
          if (en.name) p.name = en.name;
          if (en.category) p.category = en.category;
          if (en.shortDesc) p.shortDesc = en.shortDesc;
          if (en.description) p.description = en.description;
          if (en.specs) p.specs = en.specs.slice();
          if (en.badge !== undefined) p.badge = en.badge;
          if (en.addons && p.addons) {
            p.addons.forEach(a => { if (en.addons[a.id]) a.label = en.addons[a.id]; });
          }
        } else {
          p.name = ar.name;
          p.category = ar.category;
          p.shortDesc = ar.shortDesc;
          if (ar.description !== undefined) p.description = ar.description;
          if (ar.specs) p.specs = ar.specs.slice();
          if (ar.badge !== undefined) p.badge = ar.badge;
          if (ar.addons && p.addons) {
            p.addons.forEach((a, i) => { if (ar.addons[i]) a.label = ar.addons[i].label; });
          }
        }
      });

      // NFC options
      Object.keys(NFC_OPTIONS).forEach(k => {
        if (lang === 'en' && NFC_EN[k]) NFC_OPTIONS[k].label = NFC_EN[k];
        else NFC_OPTIONS[k].label = nfcBackup[k];
      });

      // Layout slot labels
      Object.keys(LAYOUT_DEFINITIONS).forEach(lk => {
        LAYOUT_DEFINITIONS[lk].rows.forEach((row, ri) => {
          row.slots.forEach((slot, si) => {
            const arLabel = layoutsBackup[lk][ri][si];
            if (lang === 'en' && SLOTS_EN[arLabel]) slot.label = SLOTS_EN[arLabel];
            else slot.label = arLabel;
          });
        });
      });
    }

    // ───────────────────────────────
    // DOM text-node walker for static UI
    // ───────────────────────────────
    function translateNode(node, exactMap, patterns) {
      if (node.nodeType === 3) {
        const text = node.nodeValue;
        const trimmed = text.trim();
        if (!trimmed) return;
        if (exactMap[trimmed]) {
          node.nodeValue = text.replace(trimmed, exactMap[trimmed]);
          return;
        }
        for (const p of patterns) {
          const m = trimmed.match(p.re);
          if (m) {
            node.nodeValue = text.replace(trimmed, p.gen(m));
            return;
          }
        }
      } else if (node.nodeType === 1) {
        // Skip script and style elements
        const tag = node.tagName;
        if (tag === 'SCRIPT' || tag === 'STYLE') return;
        // Translate attributes on element
        translateAttributes(node, exactMap === AR_TO_EN ? AR_TO_EN_ATTR : EN_TO_AR_ATTR);
        // Walk children
        for (let i = 0; i < node.childNodes.length; i++) {
          translateNode(node.childNodes[i], exactMap, patterns);
        }
      }
    }

    function translateAttributes(el, attrMap) {
      ['placeholder', 'title', 'alt'].forEach(attr => {
        if (el.hasAttribute && el.hasAttribute(attr)) {
          const v = el.getAttribute(attr);
          if (attrMap[v]) el.setAttribute(attr, attrMap[v]);
        }
      });
    }

    function translateWholeBody(lang) {
      const exact = lang === 'en' ? AR_TO_EN : EN_TO_AR;
      const patterns = lang === 'en' ? AR_PATTERNS : EN_PATTERNS;
      translateNode(document.body, exact, patterns);
    }

    // ───────────────────────────────
    // Mutation observer — catches dynamically added content
    // ───────────────────────────────
    function setupObserver() {
      if (observer) return;
      observer = new MutationObserver(muts => {
        if (currentLang !== 'en') return;
        muts.forEach(m => {
          m.addedNodes.forEach(node => {
            translateNode(node, AR_TO_EN, AR_PATTERNS);
          });
        });
      });
      observer.observe(document.body, { childList: true, subtree: true });
    }

    // ───────────────────────────────
    // Monkey-patch alert / confirm / showToast to translate messages
    // ───────────────────────────────
    function translateDynamicMessage(msg) {
      if (currentLang !== 'en' || typeof msg !== 'string') return msg;
      const trimmed = msg.trim();
      if (AR_TO_EN[trimmed]) return AR_TO_EN[trimmed];
      for (const p of AR_PATTERNS) {
        const m = trimmed.match(p.re);
        if (m) return p.gen(m);
      }
      return msg;
    }

    const _origAlert = window.alert.bind(window);
    window.alert = function(msg) { return _origAlert(translateDynamicMessage(msg)); };

    const _origConfirm = window.confirm.bind(window);
    window.confirm = function(msg) { return _origConfirm(translateDynamicMessage(msg)); };

    if (typeof window.showToast === 'function') {
      const _origShowToast = window.showToast;
      window.showToast = function(msg) { return _origShowToast(translateDynamicMessage(msg)); };
    }

    // ───────────────────────────────
    // Localize the WhatsApp submitOrder message
    // ───────────────────────────────
    if (typeof window.submitOrder === 'function') {
      window.submitOrder = function() {
        if (currentLang !== 'en') {
          // Use the original Arabic flow — call the built-in via re-invoking a saved copy.
          return _origSubmitOrder();
        }
        // English version of the message
        const name = document.getElementById('f_name').value.trim();
        const business = document.getElementById('f_business').value.trim();
        const city = document.getElementById('f_city').value.trim();
        const phone = document.getElementById('f_phone').value.trim();
        const notes = document.getElementById('f_notes').value.trim();

        if (!name || !business || !city || !phone) { alert('Please fill in all required fields'); return; }
        if (!/^05[0-9]{8}$/.test(phone)) { alert('Please enter a valid Saudi mobile number (starts with 05, 10 digits)'); return; }

        const NL = '\n';
        let msg = `*New order from ${BRAND_NAME}*${NL}${NL}`;
        msg += `Name: ${name}${NL}`;
        msg += `Business: ${business}${NL}`;
        msg += `City: ${city}${NL}`;
        msg += `Mobile: ${phone}${NL}${NL}`;
        msg += `*Requested products:*${NL}${NL}`;

        const subtotal = calcSubtotal();
        cart.forEach((item, itemIdx) => {
          const p = products.find(x => x.id === item.productId);
          const lineTotal = calcLineTotal(item);
          msg += `• ${p.name}${NL}`;
          msg += `   Quantity: ${item.qty}${NL}`;
          if (SHOW_PRICES && !p.hidePrice) {
            msg += `   Total: ${lineTotal} SAR${NL}`;
          }
          if (SHOW_PRICES && p.priceTiers && p.priceTiers.length > 1) {
            const breakdown = buildTierBreakdown(p, item.qty);
            if (breakdown) {
              // Translate the AR breakdown "N قطعة بسعر M" -> "N pcs at M"
              const enBreakdown = breakdown.replace(/(\d+) قطعة بسعر (\d+)/g, '$1 pcs at $2');
              msg += `   Pricing: ${enBreakdown}${NL}`;
            }
          }
          if (item.nfcSelections && Object.keys(item.nfcSelections).length > 0) {
            msg += `   Chips:${NL}`;
            Object.keys(item.nfcSelections).forEach(sid => {
              const opt = NFC_OPTIONS[item.nfcSelections[sid]];
              const slotLabel = getSlotLabel(item.layout, sid);
              msg += `      • ${slotLabel}: ${opt.label}${NL}`;
            });
          }
          if (item.addons && item.addons.length > 0) {
            const validAddons = item.addons.map(id => (p.addons || []).find(a => a.id === id)).filter(Boolean);
            if (validAddons.length > 0) {
              msg += `   Add-ons:${NL}`;
              validAddons.forEach(addon => {
                if (SHOW_PRICES) msg += `      • ${addon.label} — adds ${addon.price} SAR per piece${NL}`;
                else msg += `      • ${addon.label}${NL}`;
              });
            }
          }
          if (p.includesStand) {
            msg += `   Includes a free display stand${NL}`;
          }
          if (itemIdx < cart.length - 1) msg += NL;
        });

        if (SHOW_PRICES) {
          msg += `${NL}*Financial summary:*${NL}`;
          msg += `Subtotal: ${subtotal} SAR${NL}`;
          if (appliedDiscount) {
            const discountAmount = calcDiscountAmount(subtotal);
            msg += `Discount code: ${appliedDiscount.code} ${appliedDiscount.label}${NL}`;
            msg += `Discount value: -${discountAmount} SAR${NL}`;
            msg += `*Grand total: ${subtotal - discountAmount} SAR*${NL}`;
          } else {
            msg += `*Grand total: ${subtotal} SAR*${NL}`;
          }
        }

        if (notes) msg += `${NL}Notes: ${notes}${NL}`;
        msg += `${NL}I will attach my store logo in the next message.`;

        // Customer-source footer (only when a stored affiliate code exists)
        const refCode = (typeof getActiveRefCode === 'function') ? getActiveRefCode() : null;
        if (refCode) {
          msg += `${NL}${NL}━━━━━━━━━━━━━━━${NL}`;
          msg += `I came from: ${refCode}${NL}`;
          msg += `━━━━━━━━━━━━━━━`;
        }

        const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
        window.open(url, '_blank');
        closeCheckout();
        showToast('WhatsApp opened — attach your logo in the chat and send. Your cart is saved.');
      };
      var _origSubmitOrder = window.submitOrder._orig || null;
      // Capture original for AR case (before override): grab from a fresh function object
    }
    // Save original submitOrder reference correctly (before override took effect above)
    // We need to re-approach: preserve original first.
    // ───────────────────────────────

    // ───────────────────────────────
    // Public API: setLanguage / toggleLanguage
    // ───────────────────────────────
    function setLanguage(lang) {
      if (lang !== 'ar' && lang !== 'en') return;
      if (lang === currentLang) return;

      const previousLang = currentLang;
      currentLang = lang;

      // Update <html> attributes
      document.documentElement.setAttribute('lang', lang);
      document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

      // Update body classes for optional styling hook
      document.body.setAttribute('data-lang', lang);

      // Swap data (products, NFC, slot labels)
      applyDataForLang(lang);

      // Re-render dynamic content that reads from data
      if (typeof renderProducts === 'function') renderProducts();
      if (typeof renderCart === 'function') renderCart();
      if (typeof refreshCheckoutTotals === 'function') refreshCheckoutTotals();

      // Update section titles that are set from constants at init
      const clientsTitle = document.getElementById('clientsTitle');
      if (clientsTitle) clientsTitle.textContent = lang === 'en' ? 'They Chose AORAV' : 'اختاروا AORAV';
      const videoTitle = document.getElementById('videoTitle');
      if (videoTitle) videoTitle.textContent = lang === 'en' ? 'Meet Our Products' : 'تعرّف على منتجاتنا';
      const videoDesc = document.getElementById('videoDesc');
      if (videoDesc) videoDesc.textContent = lang === 'en' ? 'See how we design and craft our custom products by hand in Yanbu' : 'شاهد كيف نصمّم ونصنع منتجاتنا المخصصة يدوياً في بينبع';
      const brandTagline = document.getElementById('brandTagline');
      if (brandTagline) brandTagline.textContent = lang === 'en' ? 'Custom products with your logo' : 'منتجات مخصصة بشعارك';

      // Update page <title>
      document.title = lang === 'en'
        ? `${BRAND_NAME} — Custom products with your logo`
        : `${BRAND_NAME} — منتجات مخصصة بشعارك`;

      // Walk DOM to translate remaining static text (uses the direction based on new lang)
      translateWholeBody(lang);

      // Update toggle button label
      const btn = document.getElementById('langToggleBtn');
      if (btn) btn.textContent = lang === 'ar' ? 'EN' : 'ع';
    }

    window.toggleLanguage = function() {
      setLanguage(currentLang === 'ar' ? 'en' : 'ar');
    };
    window.setLanguage = setLanguage;

    // ───────────────────────────────
    // Save the original Arabic submitOrder BEFORE we override
    // (we need to restore proper closure order)
    // ───────────────────────────────
    // The above monkey-patch of submitOrder needs a captured original. Redo cleanly here:
    (function fixSubmitOrder() {
      // Undo the earlier assignment first if it exists
      // Reload the fresh implementation from the outer scope name:
      // Since submitOrder was originally defined via `function submitOrder()`,
      // it lives on window. We recapture and re-wrap safely.
      const originalSubmitOrder = window.submitOrder; // this is currently our overridden EN-only version
      // We need the true ORIGINAL — which we lost. Let's redefine both branches:
      // Rebuild an Arabic version using the same logic that was in the source:
      function submitOrderAR() {
        const name = document.getElementById('f_name').value.trim();
        const business = document.getElementById('f_business').value.trim();
        const city = document.getElementById('f_city').value.trim();
        const phone = document.getElementById('f_phone').value.trim();
        const notes = document.getElementById('f_notes').value.trim();
        if (!name || !business || !city || !phone) { alert('الرجاء تعبئة جميع الحقول المطلوبة'); return; }
        if (!/^05[0-9]{8}$/.test(phone)) { alert('الرجاء إدخال رقم جوال سعودي صحيح (يبدأ بـ 05 و10 أرقام)'); return; }
        const NL = '\n';
        let msg = `*طلب جديد من ${BRAND_NAME}*${NL}${NL}`;
        msg += `الاسم: ${name}${NL}`;
        msg += `المحل: ${business}${NL}`;
        msg += `المدينة: ${city}${NL}`;
        msg += `الجوال: ${phone}${NL}${NL}`;
        msg += `*المنتجات المطلوبة:*${NL}${NL}`;
        const subtotal = calcSubtotal();
        cart.forEach((item, itemIdx) => {
          const p = products.find(x => x.id === item.productId);
          const lineTotal = calcLineTotal(item);
          msg += `• ${p.name}${NL}`;
          msg += `   الكمية: ${item.qty}${NL}`;
          if (SHOW_PRICES && !p.hidePrice) msg += `   المجموع: ${lineTotal} ${CURRENCY}${NL}`;
          if (SHOW_PRICES && p.priceTiers && p.priceTiers.length > 1) {
            const breakdown = buildTierBreakdown(p, item.qty);
            if (breakdown) msg += `   التسعير: ${breakdown}${NL}`;
          }
          if (item.nfcSelections && Object.keys(item.nfcSelections).length > 0) {
            msg += `   الشرائح:${NL}`;
            Object.keys(item.nfcSelections).forEach(sid => {
              const opt = NFC_OPTIONS[item.nfcSelections[sid]];
              const slotLabel = getSlotLabel(item.layout, sid);
              msg += `      • ${slotLabel}: ${opt.label}${NL}`;
            });
          }
          if (item.addons && item.addons.length > 0) {
            const validAddons = item.addons.map(id => (p.addons || []).find(a => a.id === id)).filter(Boolean);
            if (validAddons.length > 0) {
              msg += `   إضافات:${NL}`;
              validAddons.forEach(addon => {
                if (SHOW_PRICES) msg += `      • ${addon.label} — يضيف ${addon.price} ${CURRENCY} لكل قطعة${NL}`;
                else msg += `      • ${addon.label}${NL}`;
              });
            }
          }
          if (p.includesStand) msg += `   يشمل حامل منصة مجاناً${NL}`;
          if (itemIdx < cart.length - 1) msg += NL;
        });
        if (SHOW_PRICES) {
          msg += `${NL}*الملخص المالي:*${NL}`;
          msg += `المجموع الفرعي: ${subtotal} ${CURRENCY}${NL}`;
          if (appliedDiscount) {
            const discountAmount = calcDiscountAmount(subtotal);
            msg += `كود الخصم: ${appliedDiscount.code} ${appliedDiscount.label}${NL}`;
            msg += `قيمة الخصم: -${discountAmount} ${CURRENCY}${NL}`;
            msg += `*الإجمالي: ${subtotal - discountAmount} ${CURRENCY}*${NL}`;
          } else {
            msg += `*الإجمالي: ${subtotal} ${CURRENCY}*${NL}`;
          }
        }
        if (notes) msg += `${NL}الملاحظات: ${notes}${NL}`;
        msg += `${NL}سأرفق شعار المحل في الرسالة القادمة.`;
        // تذييل مصدر العميل
        const refCode = (typeof getActiveRefCode === 'function') ? getActiveRefCode() : null;
        if (refCode) {
          msg += `${NL}${NL}━━━━━━━━━━━━━━━${NL}`;
          msg += `أتى العميل عن طريق: ${refCode}${NL}`;
          msg += `━━━━━━━━━━━━━━━`;
        }
        const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
        window.open(url, '_blank');
        closeCheckout();
        showToast('تم فتح واتساب — أرفق شعارك في المحادثة وأرسل. سلتك محفوظة.');
      }
      // The 'originalSubmitOrder' captured above is our English-only version.
      const submitOrderEN = originalSubmitOrder;
      window.submitOrder = function() {
        if (currentLang === 'en') return submitOrderEN();
        return submitOrderAR();
      };
    })();

    // ───────────────────────────────
    // Initialize
    // ───────────────────────────────
    setupObserver();

    // Detect browser language
    const browserLang = (navigator.language || navigator.userLanguage || 'ar').toLowerCase();
    const initialLang = browserLang.startsWith('ar') ? 'ar' : 'en';

    // Apply initial language if not Arabic (page is Arabic by default)
    if (initialLang === 'en') {
      // Wait a tick so all render functions have completed
      setTimeout(() => setLanguage('en'), 0);
    } else {
      const btn = document.getElementById('langToggleBtn');
      if (btn) btn.textContent = 'EN';
    }
  })();
