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
        price: 249,
        originalPrice: 399,   // السعر الأصلي — يظهر مشطوباً بجانب سعر الخصم
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
          { id: 'custom_logo',   label: 'شعارك مطبوع 3دي',            price: 99, enabled: true },
          { id: 'engraved_name', label: 'اسم المحل بارز مطبوع 3دي',   price: 10, enabled: false },
          { id: 'silicone_base', label: 'قاعدة سيليكون مانعة انزلاق', price: 5,  enabled: false },
        ],
      },
      {
        id: 'p2',
        name: 'حامل مناديل مخصص',
        category: 'إكسسوارات طاولة',
        price: 85,   // سعر أدنى tier (يستخدم فقط لعرض الحدّ الأدنى)
        // ── تسعير طبقي "flat" ──
        // كل tier يمثّل شريحة كمية: كلما زادت الكمية الكلية، طُبّق سعر أقل على كل قطعة
        // upTo: الحد الأعلى لعدد القطع في هذه الشريحة
        // مثال: طلب 20 قطعة → السعر 109 لكل قطعة → الإجمالي 2,180
        tierMode: 'flat',
        priceTiers: [
          { upTo: 10,  price: 119 },
          { upTo: 20,  price: 109 },
          { upTo: 30,  price: 99  },
          { upTo: 50,  price: 95  },
          { upTo: 75,  price: 92  },
          { upTo: 100, price: 89  },
          { upTo: 150, price: 87  },
          { upTo: 200, price: 85  },
          { price: 85 },  // ما فوق 200 يبقى بنفس السعر (يمكن التواصل لكميات أكبر)
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
        id: 'p1',
        name: 'اوراف برايم',
        category: 'ستاندات',
        price: 349,
        originalPrice: 520,   // السعر الأصلي — يظهر مشطوباً بجانب سعر الخصم
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
          { id: 'custom_logo',   label: 'شعارك مطبوع 3دي',            price: 99, enabled: true },
          { id: 'engraved_name', label: 'اسم المحل بارز مطبوع 3دي',   price: 15, enabled: false },
          { id: 'silicone_base', label: 'قاعدة سيليكون مانعة انزلاق', price: 5,  enabled: false },
        ],
      },
      // ─────────────────────────────────────────────────
      // منتج بخيارات (variants) — الميداليات
      // كل خيار (variant) له إمّا:
      //   • packages: باقات ثابتة { qty, price, label? } يختار العميل وحدة منها
      //   • hidePrice: true → لا يعرض سعر، ويُضاف للسلة كطلب عرض سعر
      // كل خيار له description خاص يظهر لما يُختار
      // ─────────────────────────────────────────────────
      {
        id: 'p7',
        name: 'ميداليات AORAV المخصصة',
        tagline: 'حوّل هوية براندك إلى قطعة يحملها عميلك معه.',
        category: 'ميداليات',
        images: ['images/medal1.jpg', 'images/medal2.jpg', 'images/medal3.jpg'],
        shortDesc: 'نصمم ونصنع ميداليات مخصصة بهوية براندك، للهدايا والافتتاحات والمناسبات والحملات. اختر النسخة العادية، أضف NFC للتفاعل الرقمي، أو اطلب تصميماً خاصاً بالكامل.',
        description: '<strong>ميدالية تمثّل براندك — قطعة يحملها عميلك معه.</strong><br><br>مناسبة للهدايا، الافتتاحات، المناسبات والحملات. نصمم الميدالية بالشعار والهوية بشكل مخصص لتكون قطعة فعلية تمثل البراند، وليست مجرد شعار مطبوع.',
        specs: [
          'تصميم واحد معتمد بهوية براندك',
          'تصنيع الميداليات + حلقات التعليق',
          'خيار إضافة شريحة NFC للتفاعل الرقمي',
        ],
        variants: [
          {
            id: 'plain',
            name: 'بدون شريحة',
            details: '<strong>يشمل:</strong> تصميم معتمد + تصنيع الميداليات + حلقات التعليق.',
            packages: [
              { qty: 25,  price: 179 },
              { qty: 50,  price: 299 },
              { qty: 100, price: 499 },
              { qty: 200, price: 799 },
              { qty: 500, price: 1490, label: '+500' },
            ],
          },
          {
            id: 'nfc',
            name: 'NFC ذكية',
            details: 'شريحة NFC مدمجة داخل كل قطعة — يقرّب العميل جواله من الميدالية فينفتح الرابط الذي تختاره (موقع، Instagram، منيو، خرائط، أو أي رابط آخر).<br><br><strong>يشمل:</strong> تصميم معتمد + شريحة NFC لكل ميدالية + برمجة رابط واحد للدفعة + التصنيع.',
            packages: [
              { qty: 25,  price: 199 },
              { qty: 50,  price: 349 },
              { qty: 100, price: 599 },
              { qty: 200, price: 999 },
              { qty: 500, price: 1990, label: '+500' },
            ],
          },
          {
            id: 'custom',
            name: 'تصميم خاص',
            hidePrice: true,
            details: 'ميدالية بفكرة خاصة ببراندك — نصمم شكلاً مخصصاً من الصفر بدل الشكل التقليدي. مناسبة للتصاميم المجسمة، الأشكال ثلاثية الأبعاد، الحملات الخاصة واليوم الوطني والطلبات التي تحتاج تنفيذاً مختلفاً.<br><br><em>مثال:</em> ميدالية على شكل دلة 3D، كوب، منتج البراند، رمز خاص، أو تصميم هندسي بالكامل.<br><br><strong>السعر:</strong> يُحدد بعد مراجعة الفكرة، التعقيد والكمية.',
          },
        ],
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
    let currentVariantId = null;      // الخيار المفتوح حالياً (للمنتجات ذات variants)
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
    //
    // نظامان مدعومان:
    //
    // (1) tierMode: 'incremental' (الافتراضي) — كل شريحة تُطبَّق على جزء من الكمية
    //     مثال: priceTiers: [{ upTo: 10, price: 140 }, { price: 95 }]
    //       → أول 10 قطع بسعر 140، والباقي بسعر 95
    //       → قيمة 15 قطعة = 10×140 + 5×95 = 1875
    //
    // (2) tierMode: 'flat' — الكمية الكلية تحدد سعر الوحدة لكل القطع
    //     مثال: priceTiers: [{ upTo: 10, price: 119 }, { upTo: 20, price: 109 }, ...]
    //       → 15 قطعة تدخل في شريحة "حتى 20" → السعر 109 لكل قطعة
    //       → قيمة 15 قطعة = 15×109 = 1635
    //
    // -------------------------------------
    // مساعدات الخيارات (variants) والباقات (packages)
    // -------------------------------------
    // منتج بخيارات: p.variants = [{id, name, details, packages?, hidePrice?}]
    // كل خيار له إما packages (باقات ثابتة { qty, price, label? })
    // أو hidePrice=true (طلب عرض سعر — بدون سعر ولا كمية)
    function productHasVariants(p) {
      return !!(p && Array.isArray(p.variants) && p.variants.length > 0);
    }
    function findVariant(p, variantId) {
      if (!productHasVariants(p)) return null;
      return p.variants.find(v => v.id === variantId) || p.variants[0];
    }
    function findPackage(variant, qty) {
      if (!variant || !variant.packages) return null;
      return variant.packages.find(pk => pk.qty === qty) || null;
    }
    // أرخص سعر ابتدائي عبر كل الخيارات — يظهر في بطاقة المنتج بالشبكة
    function cheapestStartPrice(p) {
      if (!productHasVariants(p)) return null;
      for (const v of p.variants) {
        if (v.hidePrice || !v.packages || v.packages.length === 0) continue;
        return v.packages[0].price;  // أول باقة = أصغر كمية = السعر الابتدائي
      }
      return null;
    }
    // ملصق كمية الباقة (يستخدم label لو موجود، وإلا يستخدم qty كنص)
    function packageQtyLabel(pkg) {
      return pkg.label || String(pkg.qty);
    }

    function calcTieredBasePrice(product, qty) {
      const tiers = product.priceTiers;
      if (!tiers || tiers.length === 0) return product.price * qty;

      // نظام flat: سعر واحد على كل الكمية بناءً على الشريحة التي تناسبها
      if (product.tierMode === 'flat') {
        for (const tier of tiers) {
          if (tier.upTo === undefined || qty <= tier.upTo) {
            return qty * tier.price;
          }
        }
        // احتياطياً: استخدم آخر شريحة
        return qty * tiers[tiers.length - 1].price;
      }

      // نظام incremental (الافتراضي)
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

      // منتج بخيارات (variants) — الباقة الواحدة سعر إجمالي ثابت
      if (productHasVariants(p)) {
        const v = findVariant(p, item.variantId);
        if (!v || v.hidePrice) return 0;
        const pkg = findPackage(v, item.qty);
        return pkg ? pkg.price : 0;
      }

      const baseTotal = calcTieredBasePrice(p, item.qty);
      const addonPerUnit = (item.addons || []).reduce((sum, addonId) => {
        const addon = (p.addons || []).find(a => a.id === addonId);
        return sum + (addon ? addon.price : 0);
      }, 0);
      return baseTotal + (addonPerUnit * item.qty);
    }

    // هل يُخفى سعر السطر بالكامل؟ (المنتج نفسه فيه hidePrice، أو الخيار المختار فيه hidePrice)
    function itemHidesPrice(item) {
      const p = products.find(x => x.id === item.productId);
      if (!p) return false;
      if (p.hidePrice) return true;
      if (productHasVariants(p)) {
        const v = findVariant(p, item.variantId);
        if (v && v.hidePrice) return true;
      }
      return false;
    }

    // نص وصفي للتسعير المتدرّج (يظهر في تفاصيل المنتج)
    function tieredPricingLabel(product) {
      const tiers = product.priceTiers;
      if (!tiers || tiers.length === 0) return null;

      // نظام flat: نبيّن الحد الأقصى والأدنى للسعر
      if (product.tierMode === 'flat') {
        const first = tiers[0].price;
        const last = tiers[tiers.length - 1].price;
        return `كلما زاد العدد قلّ السعر — من ${first} إلى ${last} ${CURRENCY} لكل قطعة`;
      }

      // نظام incremental (الافتراضي)
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

    // البحث عن الشريحة (tier) المناسبة لكمية محددة في نظام flat
    function findFlatTier(product, qty) {
      const tiers = product.priceTiers || [];
      for (const tier of tiers) {
        if (tier.upTo === undefined || qty <= tier.upTo) return tier;
      }
      return tiers[tiers.length - 1] || null;
    }

    // تفصيل حسابي للتسعير المتدرّج على كمية محددة (لرسالة الواتساب)
    // incremental مثال: qty=15 → "10 × 140 + 5 × 95"
    // flat مثال: qty=20 → "20 × 109 ر.س"
    function buildTierBreakdown(product, qty) {
      const tiers = product.priceTiers;
      if (!tiers || tiers.length === 0) return null;

      // نظام flat: سطر واحد يوضّح السعر المطبّق
      if (product.tierMode === 'flat') {
        const tier = findFlatTier(product, qty);
        return tier ? `${qty} × ${tier.price} ${CURRENCY} للقطعة` : null;
      }

      // نظام incremental (الافتراضي)
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
        // للمنتجات ذات الخيارات (variants): نطلب variantId صالح، وإلا نحذف السطر
        // (لتوافق آمن مع السلات القديمة قبل نظام الخيارات)
        const loaded = Array.isArray(data.cart) ? data.cart : [];
        cart = loaded.filter(item => {
          const p = products.find(x => x.id === item.productId);
          if (!p) return false;
          if (productHasVariants(p)) {
            if (!item.variantId) return false;
            if (!findVariant(p, item.variantId)) return false;
          }
          return true;
        });
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
        // منتج بخيارات (variants): اعرض "تبدأ من X ر.س" بأرخص باقة في أرخص خيار
        let priceHtml;
        if (productHasVariants(p)) {
          const startPrice = cheapestStartPrice(p);
          priceHtml = (startPrice !== null)
            ? `<span class="price-tag text-sm font-bold text-brand-700">تبدأ من ${startPrice} ${CURRENCY}</span>`
            : '';
        } else {
          const displayPrice = p.priceTiers && p.priceTiers[0] ? p.priceTiers[0].price : p.price;
          // عرض السعر الأصلي مشطوباً بجانب سعر الخصم إذا وُجد originalPrice
          priceHtml = p.originalPrice
            ? `<span class="price-tag text-sm font-bold text-brand-700 flex items-center gap-1.5">
                 <span class="text-brand-500/70 line-through text-xs font-medium">${p.originalPrice}</span>
                 <span>${displayPrice} ${CURRENCY}</span>
               </span>`
            : `<span class="price-tag text-sm font-bold text-brand-700">${displayPrice} ${CURRENCY}</span>`;
        }

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
              ${priceHtml}
            </div>
            <h5 class="font-bold text-lg mt-1 mb-1">${p.name}</h5>
            ${p.tagline ? `<p class="text-xs text-brand-700 italic mb-2 leading-snug">${p.tagline}</p>` : ''}
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
      currentVariantId = null;

      // منتج بخيارات: نبدأ بأول خيار، والكمية = كمية أول باقة فيه
      if (productHasVariants(currentProduct)) {
        const firstVariant = currentProduct.variants[0];
        currentVariantId = firstVariant.id;
        if (firstVariant.packages && firstVariant.packages.length > 0) {
          currentQty = firstVariant.packages[0].qty;
        } else {
          currentQty = 1;
        }
      }

      // أوقف الفيديو الرئيسي إذا كان شغال قبل ما نفتح المودال
      stopBottomVideo();

      document.getElementById('modalCategory').textContent = currentProduct.category;
      document.getElementById('modalName').textContent = currentProduct.name;

      // Tagline (سطر تسويقي إيطالي تحت الاسم)
      const taglineEl = document.getElementById('modalTagline');
      if (taglineEl) {
        if (currentProduct.tagline) {
          taglineEl.textContent = currentProduct.tagline;
          taglineEl.classList.remove('hidden');
        } else {
          taglineEl.classList.add('hidden');
        }
      }

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

      // عرض السعر — إذا كان فيه تسعير متدرّج، اعرض سعر الشريحة الحالية
      // إذا كان فيه originalPrice نعرض السعر الأصلي مشطوباً بجانب سعر الخصم
      // ملاحظة: في نظام flat، السعر يتحدث تلقائياً مع تغيير الكمية عبر renderModalPrice()
      const tierNoteEl = document.getElementById('modalTierNote');

      renderModalPrice();  // العرض الأولي

      // ملاحظة التسعير المتدرّج — لا تظهر للمنتجات ذات variants (لها بلوك خاص)
      if (!productHasVariants(currentProduct)
          && currentProduct.priceTiers && currentProduct.priceTiers.length > 0) {
        tierNoteEl.textContent = tieredPricingLabel(currentProduct);
        tierNoteEl.classList.remove('hidden');
      } else {
        tierNoteEl.classList.add('hidden');
      }

      // جدول التسعير الطبقي — يظهر فقط للمنتجات ذات tierMode: 'flat' وبدون variants
      renderTierTable();

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
      renderVariantBlock();     // يعرض بلوك الخيارات لو كان المنتج فيه variants

      // للمنتجات ذات variants: نخفي عدّاد الكمية العادي (الكمية تتحكم فيها الباقات)
      const qtyRow = document.getElementById('modalQtyRow');
      if (qtyRow) {
        if (productHasVariants(currentProduct)) qtyRow.classList.add('hidden');
        else qtyRow.classList.remove('hidden');
      }

      const modal = document.getElementById('productModal');
      modal.classList.remove('hidden');
      modal.classList.add('flex');
    }

    // -------------------------------------
    // عرض سعر المنتج داخل المودال — يتفاعل مع الكمية الحالية في نظام flat
    // -------------------------------------
    function renderModalPrice() {
      if (!currentProduct) return;
      const modalPriceEl = document.getElementById('modalPrice');
      if (!modalPriceEl) return;

      // منتج بخيارات (variants): السعر من الباقة المختارة داخل الخيار الحالي
      if (productHasVariants(currentProduct)) {
        const v = findVariant(currentProduct, currentVariantId);
        if (!v || v.hidePrice) {
          modalPriceEl.innerHTML = '';
          return;
        }
        const pkg = findPackage(v, currentQty);
        if (!pkg) { modalPriceEl.innerHTML = ''; return; }
        modalPriceEl.innerHTML = `<span>${pkg.price} ${CURRENCY}</span> <span class="text-brand-500 text-sm font-normal">للـ ${packageQtyLabel(pkg)} قطعة</span>`;
        return;
      }

      // احسب السعر المطبَّق حالياً (يتغيّر مع الكمية في نظام flat)
      let activePrice;
      if (currentProduct.priceTiers && currentProduct.priceTiers.length > 0) {
        if (currentProduct.tierMode === 'flat') {
          const t = findFlatTier(currentProduct, currentQty);
          activePrice = t ? t.price : currentProduct.priceTiers[0].price;
        } else {
          activePrice = currentProduct.priceTiers[0].price;
        }
      } else {
        activePrice = currentProduct.price;
      }

      if (currentProduct.originalPrice) {
        // خصم — سعر أصلي مشطوب + سعر الخصم
        modalPriceEl.innerHTML = `
          <span class="text-brand-500/70 line-through text-lg font-medium mr-2">${currentProduct.originalPrice} ${CURRENCY}</span>
          <span>${activePrice} ${CURRENCY}</span>
        `;
      } else {
        modalPriceEl.textContent = `${activePrice} ${CURRENCY}`;
      }
    }

    // نتذكّر مكان عداد الكمية الأصلي عشان نرجّعه لما نغلق الجدول
    let _qtyRowOriginalParent = null;
    let _qtyRowOriginalNext = null;
    let _qtyRowOriginalClass = null;

    // -------------------------------------
    // جدول التسعير الطبقي — للمنتجات ذات tierMode: 'flat'
    // يعرض جدول الأسعار بشكل مرئي واضح مع تحديد الشريحة الحالية للكمية المختارة
    // كما ينقل عداد الكمية إلى تحت الجدول مباشرة لسهولة الاستخدام
    //
    // ⚠️ ملاحظة مهمة: نحدّث محتوى الجدول فقط عبر tier-card الداخلية،
    // ولا نلمس عنصر عداد الكمية أبداً بعد أول تنسيب — عشان لا يفقد التركيز
    // أثناء الكتابة (المتصفح يفقد focus عند removeChild).
    // -------------------------------------
    function renderTierTable() {
      const el = document.getElementById('modalTierTable');
      const qtyRow = document.getElementById('modalQtyRow');
      if (!el) return;

      // نسجّل المكان الأصلي لعداد الكمية أول مرة
      if (qtyRow && !_qtyRowOriginalParent) {
        _qtyRowOriginalParent = qtyRow.parentNode;
        _qtyRowOriginalNext = qtyRow.nextSibling;
        _qtyRowOriginalClass = qtyRow.className;
      }

      // هل نعرض الجدول؟ (شرطه: tierMode = 'flat' و3 شرائح أو أكثر، وبدون variants)
      const showTable = currentProduct
        && !productHasVariants(currentProduct)
        && currentProduct.tierMode === 'flat'
        && currentProduct.priceTiers
        && currentProduct.priceTiers.length >= 3;

      if (!showTable) {
        // نرجّع عدّاد الكمية لمكانه الأصلي أولاً (لو كان داخل الحاوية)
        if (qtyRow && _qtyRowOriginalParent && qtyRow.parentNode !== _qtyRowOriginalParent) {
          if (_qtyRowOriginalClass !== null) qtyRow.className = _qtyRowOriginalClass;
          _qtyRowOriginalParent.insertBefore(qtyRow, _qtyRowOriginalNext);
        }
        el.classList.add('hidden');
        el.innerHTML = '';
        return;
      }

      const tiers = currentProduct.priceTiers;
      const activeTier = findFlatTier(currentProduct, currentQty);

      // بناء صفوف الجدول
      const rows = tiers.map((tier, i) => {
        const prev = i === 0 ? 1 : (tiers[i - 1].upTo || 0) + 1;
        let qtyLabel;
        if (tier.upTo === undefined) {
          qtyLabel = `أكثر من ${tiers[i - 1]?.upTo || 0}`;
        } else if (prev === tier.upTo) {
          qtyLabel = `${tier.upTo}`;
        } else {
          qtyLabel = `${prev}–${tier.upTo}`;
        }

        const isActive = tier === activeTier;
        const rowClass = isActive
          ? 'bg-brand-700 text-white font-bold'
          : 'hover:bg-brand-50';
        const check = isActive
          ? `<svg class="inline w-3 h-3 me-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>`
          : '';

        return `<tr class="${rowClass} transition">
          <td class="px-3 py-1.5 text-center border-t border-brand-100">${check}${qtyLabel}</td>
          <td class="px-3 py-1.5 text-center border-t border-brand-100">${tier.price} ${CURRENCY}</td>
        </tr>`;
      }).join('');

      const tierCardHtml = `
        <div class="bg-white border border-brand-100 rounded-lg overflow-hidden">
          <div class="bg-brand-50 px-3 py-2 border-b border-brand-100">
            <p class="text-xs font-bold text-brand-900">جدول الأسعار — كلما زاد العدد قلّ السعر</p>
          </div>
          <table class="w-full text-xs">
            <thead>
              <tr class="bg-brand-50 text-brand-500">
                <th class="px-3 py-1.5 text-center font-semibold">الكمية</th>
                <th class="px-3 py-1.5 text-center font-semibold">سعر القطعة</th>
              </tr>
            </thead>
            <tbody>${rows}</tbody>
          </table>
          <div class="bg-brand-50 px-3 py-2 border-t border-brand-100 text-[11px] text-brand-500 text-center">
            الصف المُظلَّل هو المطبَّق على كميتك الحالية
          </div>
        </div>
      `;

      // نتحقق: هل الهيكل الداخلي (tier-card + qty row) موجود؟
      // • أول مرة → نبنيه ثم ننقل عدّاد الكمية داخله
      // • المرات التالية → نحدّث محتوى tier-card فقط، ولا نلمس عدّاد الكمية أبداً
      //   (عشان لا يفقد التركيز أثناء كتابة الرقم)
      let tierCard = el.querySelector('.tier-card');
      if (!tierCard) {
        el.classList.remove('hidden');
        el.innerHTML = '';  // نمسح أي محتوى قديم قبل ما نبني الهيكل الجديد
        tierCard = document.createElement('div');
        tierCard.className = 'tier-card';
        el.appendChild(tierCard);
        // ننقل عدّاد الكمية إلى داخل الحاوية (مرة واحدة فقط)
        if (qtyRow) {
          qtyRow.className = 'flex items-center justify-center gap-3 mt-3 bg-brand-50 border border-brand-100 rounded-lg py-3';
          el.appendChild(qtyRow);
        }
      }

      // نحدّث محتوى الجدول فقط — بدون لمس عدّاد الكمية
      tierCard.innerHTML = tierCardHtml;
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

      // الإضافات المقفلة تكون مفعّلة تلقائياً ولا يمكن للعميل إلغاؤها
      enabled.forEach(a => {
        if (a.locked) currentSelectedAddons.add(a.id);
      });

      // عنوان القسم — يتكيف حسب طبيعة الإضافات
      const hasOptional = enabled.some(a => !a.locked);
      const allLocked = enabled.every(a => a.locked);
      const allLockedFree = allLocked && enabled.every(a => a.price === 0);
      let sectionTitle;
      if (hasOptional) sectionTitle = 'إضافات اختيارية';
      else if (allLockedFree) sectionTitle = 'الإضافات المشمولة';
      else sectionTitle = 'الإضافات';

      container.innerHTML = `
        <div class="border-t border-brand-100 pt-4">
          <p class="text-sm font-bold mb-3">${sectionTitle}</p>
          <div class="space-y-2">
            ${enabled.map(a => {
              const checked = currentSelectedAddons.has(a.id);
              const isLocked = !!a.locked;

              // سعر الإضافة — إذا كان فيه originalPrice نعرضه كخصم (مشطوب)
              let priceLabel;
              if (a.originalPrice && a.originalPrice > a.price) {
                if (a.price === 0) {
                  // مجاناً مع عرض السعر الأصلي مشطوباً
                  priceLabel = `
                    <span class="price-tag text-sm font-semibold flex items-center gap-1.5">
                      <span class="text-brand-500/70 line-through text-xs font-medium">+${a.originalPrice} ${CURRENCY}</span>
                      <span class="text-green-700 font-bold">مجاناً</span>
                    </span>`;
                } else {
                  priceLabel = `
                    <span class="price-tag text-sm font-semibold flex items-center gap-1.5">
                      <span class="text-brand-500/70 line-through text-xs font-medium">+${a.originalPrice} ${CURRENCY}</span>
                      <span class="text-brand-700">+${a.price} ${CURRENCY}</span>
                    </span>`;
                }
              } else {
                priceLabel = `<span class="price-tag text-sm font-semibold text-brand-700">+${a.price} ${CURRENCY}</span>`;
              }

              // شارة "مشمول"/"مضاف تلقائياً" للإضافات المقفلة
              let lockBadge = '';
              if (isLocked) {
                const badgeText = a.price === 0 ? 'مشمول' : 'مضاف تلقائياً';
                lockBadge = `<span class="inline-flex items-center gap-1 text-[10px] font-bold bg-green-100 text-green-800 px-2 py-0.5 rounded-full whitespace-nowrap">
                     <svg class="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                     ${badgeText}
                   </span>`;
              }

              const rowClasses = isLocked
                ? 'flex items-center gap-3 p-3 bg-green-50 rounded-lg cursor-not-allowed ring-2 ring-green-600/40'
                : `flex items-center gap-3 p-3 bg-brand-50 rounded-lg cursor-pointer hover:bg-brand-100 transition ${checked ? 'ring-2 ring-brand-700' : ''}`;

              return `
                <label class="${rowClasses}">
                  <input type="checkbox" ${checked ? 'checked' : ''} ${isLocked ? 'disabled onclick="return false;"' : `onchange="toggleAddon('${a.id}')"`}
                    class="w-4 h-4 ${isLocked ? 'accent-green-700' : 'accent-brand-900'}" />
                  <span class="flex-1 text-sm flex items-center gap-2 flex-wrap">
                    <span>${a.label}</span>
                    ${lockBadge}
                  </span>
                  ${priceLabel}
                </label>
              `;
            }).join('')}
          </div>
        </div>
      `;
    }

    function toggleAddon(addonId) {
      // منع تعديل الإضافات المقفلة
      const addon = (currentProduct.addons || []).find(a => a.id === addonId);
      if (addon && addon.locked) return;
      if (currentSelectedAddons.has(addonId)) currentSelectedAddons.delete(addonId);
      else currentSelectedAddons.add(addonId);
      renderAddonsSelector();
    }

    // -------------------------------------
    // بلوك الخيارات (variants + packages) — للمنتجات التي فيها variants
    // - يعرض شريط اختيار الخيار (3 أزرار مثلاً: بدون شريحة / NFC / تصميم خاص)
    // - يعرض نص details للخيار المختار
    // - يعرض شبكة الباقات (5 أزرار)، أو ملاحظة "طلب عرض سعر" لخيار hidePrice
    // -------------------------------------
    function renderVariantBlock() {
      const el = document.getElementById('modalVariantBlock');
      if (!el) return;
      if (!productHasVariants(currentProduct)) {
        el.classList.add('hidden');
        el.innerHTML = '';
        return;
      }

      const variants = currentProduct.variants;
      const activeVariant = findVariant(currentProduct, currentVariantId) || variants[0];

      // شريط الخيارات (segmented control)
      const variantTabs = variants.map(v => {
        const isActive = v.id === activeVariant.id;
        const btnClass = isActive
          ? 'bg-brand-900 text-white shadow-sm'
          : 'bg-white text-brand-900 hover:bg-brand-50 border border-brand-100';
        return `<button type="button" onclick="selectVariant('${v.id}')"
                  class="flex-1 min-w-0 text-xs sm:text-sm font-semibold px-2 py-2.5 rounded-lg transition ${btnClass}">
                  ${v.name}
                </button>`;
      }).join('');

      // نص details للخيار المختار
      const detailsHtml = activeVariant.details
        ? `<div class="text-sm text-brand-900/80 leading-relaxed bg-brand-50 border border-brand-100 rounded-lg p-3">${activeVariant.details}</div>`
        : '';

      // منطقة الباقات أو ملاحظة "طلب عرض سعر"
      let packagesHtml = '';
      if (activeVariant.hidePrice || !activeVariant.packages || activeVariant.packages.length === 0) {
        // خيار بدون سعر — ملاحظة تشرح آلية عرض السعر
        packagesHtml = `
          <div class="rounded-lg border-2 border-dashed border-brand-700/40 bg-brand-50 p-3">
            <div class="flex items-start gap-2">
              <svg class="w-5 h-5 text-brand-700 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
              <div class="text-xs text-brand-900 leading-relaxed">
                <strong>طلب عرض سعر</strong> — أضِف "تصميم خاص" للسلة وأرسل الطلب عبر واتساب. سنراجع فكرتك والتعقيد والكمية ونعيد لك السعر النهائي.
              </div>
            </div>
          </div>`;
      } else {
        // شبكة الباقات — كل باقة زر يعرض الكمية والسعر
        const pkgButtons = activeVariant.packages.map(pkg => {
          const isActive = pkg.qty === currentQty;
          const btnClass = isActive
            ? 'bg-brand-900 text-white border-brand-900 shadow-md'
            : 'bg-white text-brand-900 border-brand-100 hover:border-brand-500';
          return `<button type="button" onclick="selectPackage(${pkg.qty})"
                    class="flex flex-col items-center justify-center gap-0.5 border-2 rounded-lg py-2.5 px-2 transition ${btnClass}">
                    <span class="text-sm font-bold">${packageQtyLabel(pkg)}</span>
                    <span class="text-[10px] ${isActive ? 'text-white/80' : 'text-brand-500'}">قطعة</span>
                    <span class="price-tag text-xs font-semibold mt-0.5">${pkg.price} ${CURRENCY}</span>
                  </button>`;
        }).join('');
        packagesHtml = `
          <div>
            <p class="text-xs font-semibold text-brand-500 mb-2">اختر الكمية</p>
            <div class="grid grid-cols-5 gap-1.5 sm:gap-2">${pkgButtons}</div>
          </div>`;
      }

      el.classList.remove('hidden');
      el.innerHTML = `
        <div class="border-t border-brand-100 pt-4 space-y-3">
          <div>
            <p class="text-xs font-semibold text-brand-500 mb-2">اختر النسخة</p>
            <div class="flex gap-1.5 sm:gap-2">${variantTabs}</div>
          </div>
          ${detailsHtml}
          ${packagesHtml}
        </div>
      `;
    }

    // اختيار خيار (variant) — يحدّث currentVariantId والكمية الافتراضية من أول باقة
    function selectVariant(variantId) {
      if (!productHasVariants(currentProduct)) return;
      const v = findVariant(currentProduct, variantId);
      if (!v) return;
      currentVariantId = v.id;
      // اضبط الكمية على أول باقة من الخيار الجديد (أو 1 للخيارات بلا باقات)
      if (v.packages && v.packages.length > 0) {
        currentQty = v.packages[0].qty;
      } else {
        currentQty = 1;
      }
      renderVariantBlock();
      renderModalPrice();
    }

    // اختيار باقة (package) داخل الخيار الحالي
    function selectPackage(qty) {
      if (!productHasVariants(currentProduct)) return;
      const v = findVariant(currentProduct, currentVariantId);
      if (!v || !v.packages) return;
      const pkg = v.packages.find(p => p.qty === qty);
      if (!pkg) return;
      currentQty = pkg.qty;
      renderVariantBlock();
      renderModalPrice();
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
      renderModalPrice();
      renderTierTable();
    }
    function modalDecQty() {
      const min = _modalMin();
      if (currentQty - _modalStep() >= min) currentQty -= _modalStep();
      document.getElementById('modalQty').value = currentQty;
      renderModalPrice();
      renderTierTable();
    }
    // أثناء الكتابة — نحدّث القيمة بدون تصحيح (نخلي المستخدم يكتب بحرية)
    function modalQtyInput(val) {
      const n = parseInt(val, 10);
      if (!isNaN(n) && n > 0) {
        currentQty = n;
        renderModalPrice();
        renderTierTable();
      }
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
      renderModalPrice();
      renderTierTable();
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
      const variantId = productHasVariants(currentProduct) ? currentVariantId : null;

      // لو نفس المنتج بنفس التكوين ونفس الإضافات ونفس الخيار موجود، ازد الكمية
      // (للمنتجات ذات variants: لا نجمع الكميات لأن كل باقة كمية ثابتة — ندفع سطر جديد)
      const existing = productHasVariants(currentProduct)
        ? null
        : cart.find(item =>
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
          variantId: variantId,
        });
      }

      saveCart();
      renderCart();
      closeProductModal();

      // نص التنبيه — للمنتجات ذات variants نذكر اسم الخيار
      if (productHasVariants(currentProduct)) {
        const v = findVariant(currentProduct, variantId);
        const variantName = v ? v.name : '';
        if (v && v.hidePrice) {
          showToast(`تم إضافة ${currentProduct.name} — ${variantName} (طلب عرض سعر) للسلة`);
        } else {
          showToast(`تم إضافة ${currentQty} × ${currentProduct.name} — ${variantName} للسلة`);
        }
      } else {
        showToast(`تم إضافة ${currentQty} × ${currentProduct.name} للسلة`);
      }
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

        // منتج بخيارات: نعرض اسم الخيار + الكمية ثابتة بلا أزرار (كل باقة كمية محددة)
        const hasVariants = productHasVariants(p);
        const variant = hasVariants ? findVariant(p, item.variantId) : null;
        const hidePriceForItem = itemHidesPrice(item);

        // شارة الخيار (للميداليات مثلاً: "بدون شريحة" / "NFC ذكية" / "تصميم خاص")
        const variantBadge = variant
          ? `<span class="inline-block bg-brand-100 text-brand-900 text-[10px] font-semibold px-2 py-0.5 rounded-full mb-1">${variant.name}</span>`
          : '';

        // ملصق الكمية — للباقات نعرض label الباقة (500+) وإلا نعرض الرقم
        let qtyLabelText = String(item.qty);
        if (hasVariants && variant && variant.packages) {
          const pkg = findPackage(variant, item.qty);
          if (pkg) qtyLabelText = packageQtyLabel(pkg);
        }

        // إخفاء السعر لو المنتج أو الخيار مؤشّر بـ hidePrice
        const priceHtml = hidePriceForItem
          ? `<span class="text-[10px] text-brand-500 italic">السعر يُحدد بعد المراجعة</span>`
          : `<span class="price-tag text-xs font-semibold text-brand-700">· ${lineTotal} ${CURRENCY}</span>`;

        // أزرار الكمية — تُخفى للمنتجات ذات variants (الكمية ثابتة من الباقة)
        // بدلها نعرض ملصق ثابت "الكمية: X قطعة"
        const qtyControls = hasVariants
          ? `<div class="text-xs text-brand-900 bg-brand-50 border border-brand-100 rounded-lg px-3 py-1">
               <span class="text-brand-500">الكمية:</span>
               <span class="font-bold">${qtyLabelText}</span>
               ${hidePriceForItem ? '' : `<span class="text-brand-500 me-1">قطعة</span>`}
             </div>`
          : `<div class="flex items-center border border-brand-100 rounded-lg">
               <button onclick="cartDec('${item.id}')" class="px-2 py-0.5 text-sm hover:bg-brand-50">−</button>
               <input type="number" inputmode="numeric" min="1" value="${item.qty}"
                      oninput="cartQtyInput('${item.id}', this.value)"
                      onblur="cartQtyBlur('${item.id}')"
                      onfocus="this.select()"
                      class="qty-input px-1 py-0.5 border-x border-brand-100 text-sm w-14 text-center focus:outline-none focus:bg-brand-50" />
               <button onclick="cartInc('${item.id}')" class="px-2 py-0.5 text-sm hover:bg-brand-50">+</button>
             </div>`;

        return `
          <div class="flex gap-3 border border-brand-100 rounded-xl p-3">
            ${cartItemImage(p)}
            <div class="flex-1 min-w-0">
              <p class="font-semibold text-sm truncate">${p.name}</p>
              ${variantBadge}
              <div class="flex items-center gap-2 mb-1 flex-wrap">
                <span class="text-xs text-brand-500">${p.category}</span>
                ${priceHtml}
              </div>
              ${standBadge}
              ${nfcSummary}
              ${addonsSummary}
              <div class="flex items-center justify-between mt-2 gap-2">
                ${qtyControls}
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
        const hasVariants = productHasVariants(p);
        const variant = hasVariants ? findVariant(p, item.variantId) : null;
        const hidePriceForItem = itemHidesPrice(item);

        // سطر المنتج الرئيسي (متعدّد الأسطر بمسمّيات عربية لتفادي كسر اتجاه النص)
        msg += `• ${p.name}${NL}`;
        if (variant) {
          msg += `   النسخة: ${variant.name}${NL}`;
        }

        // الكمية — للميداليات ذات باقة نستخدم label الباقة (500+ مثلاً)
        let qtyText = String(item.qty);
        if (hasVariants && variant && variant.packages) {
          const pkg = findPackage(variant, item.qty);
          if (pkg) qtyText = packageQtyLabel(pkg);
        }
        // للخيار بدون سعر (تصميم خاص) لا نظهر كمية — الفكرة نفسها هي الطلب
        if (!(hasVariants && variant && variant.hidePrice)) {
          msg += `   الكمية: ${qtyText}${NL}`;
        }

        if (SHOW_PRICES && !hidePriceForItem) {
          msg += `   المجموع: ${lineTotal} ${CURRENCY}${NL}`;
        } else if (hidePriceForItem) {
          msg += `   السعر: يُحدد بعد المراجعة${NL}`;
        }

        // تفصيل التسعير المتدرّج (للمنتجات التقليدية فقط، ليس ذات variants)
        if (SHOW_PRICES && !hasVariants && p.priceTiers && p.priceTiers.length > 1) {
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
              // إضافة مشمولة/مجانية (سعرها 0 مع سعر أصلي أعلى) → نظهرها كخصم
              if (SHOW_PRICES) {
                if (addon.price === 0 && addon.originalPrice) {
                  msg += `      • ${addon.label} — مشمول مجاناً (بدلاً من ${addon.originalPrice} ${CURRENCY})${NL}`;
                } else if (addon.price === 0) {
                  msg += `      • ${addon.label} — مشمول مجاناً${NL}`;
                } else if (addon.originalPrice && addon.originalPrice > addon.price) {
                  msg += `      • ${addon.label} — يضيف ${addon.price} ${CURRENCY} لكل قطعة (بدلاً من ${addon.originalPrice} ${CURRENCY})${NL}`;
                } else {
                  msg += `      • ${addon.label} — يضيف ${addon.price} ${CURRENCY} لكل قطعة${NL}`;
                }
              } else {
                msg += `      • ${addon.label}${NL}`;
              }
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

      // Hero — بانر اليوم الوطني 96
      'اليوم الوطني 96': 'National Day 96',
      'عزّنا بطبعنا': 'Our Pride in Our Nature',
      'تخفيضات اليوم الوطني': 'National Day Discounts',
      'احتفاءً بيومنا الوطني الـ 96، خصومات تصل إلى': 'Celebrating our 96th National Day, discounts up to',
      'ريال': 'SAR',
      'على منصات AORAV. صناعة سعودية 100% بأيدٍ سعودية في ينبع.': 'on AORAV stands. 100% Saudi-made by Saudi hands in Yanbu.',
      'اوراف سلم': 'AORAV Slim',
      'اوراف برايم': 'AORAV Prime',
      'شعارك مطبوع 3دي': 'Your 3D-printed logo',
      'تصفّح العروض': 'Browse Offers',
      'ر.س': 'SAR',

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
      'الكمية:': 'Quantity:',
      'أضف إلى السلة': 'Add to Cart',
      'اختر محتوى شرائح NFC': 'Choose NFC Chip Content',
      'اضغط أي شريحة قابلة للاختيار لتحديد محتواها.': 'Tap any customizable chip to set its content.',
      'إضافات اختيارية': 'Optional Add-ons',
      '-- بلا اختيار --': '-- No selection --',
      'مقفل': 'Locked',

      // Variant + package block (medals product)
      'اختر النسخة': 'Choose version',
      'اختر الكمية': 'Choose quantity',
      'قطعة': 'pcs',
      'السعر يُحدد بعد المراجعة': 'Price to be quoted after review',
      'طلب عرض سعر': 'Quote request',
      '— أضِف "تصميم خاص" للسلة وأرسل الطلب عبر واتساب. سنراجع فكرتك والتعقيد والكمية ونعيد لك السعر النهائي.':
        '— Add "Custom design" to the cart and send the order via WhatsApp. We\'ll review your idea, complexity and quantity and get back to you with the final price.',

      // Cart drawer
      'سلتك': 'Your Cart',
      'سلتك فارغة الآن': 'Your cart is empty',
      'أضف لطلبك': 'Add to your order',
      'ميداليات مخصصة بشعارك': 'Custom Medals with Your Logo',
      'قطع مميزة بشعار محلك — الكمية بمضاعفات 10': 'Distinctive pieces with your store logo — quantity in multiples of 10',
      'أضف للسلة': 'Add to Cart',
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
          custom_logo: 'Your logo 3D-printed',
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
          custom_logo: 'Your logo 3D-printed',
          engraved_name: 'Store name embossed 3D print',
          silicone_base: 'Silicone anti-slip base',
        },
      },
      p7: {
        name: 'AORAV Custom Medals',
        category: 'Medals',
        tagline: 'Turn your brand identity into a piece your customer carries with them.',
        shortDesc: 'We design and manufacture custom medals branded with your identity — for gifts, openings, events, and campaigns. Choose the standard version, add NFC for digital interaction, or request a fully custom design.',
        description: '<strong>A medal that represents your brand — a piece your customer carries with them.</strong><br><br>Perfect for gifts, openings, events and campaigns. We design the medal with your logo and identity as a bespoke piece that truly represents the brand — not just a printed logo.',
        specs: [
          'One approved design with your brand identity',
          'Medals manufacturing + hanging loops',
          'Option to add NFC chip for digital interaction',
        ],
        variants: {
          plain:  { name: 'Without chip',  details: '<strong>Includes:</strong> approved design + medals manufacturing + hanging loops.' },
          nfc:    { name: 'Smart NFC',     details: 'An NFC chip embedded inside each piece — the customer taps their phone on the medal to open the link you choose (website, Instagram, menu, Maps, or any other link).<br><br><strong>Includes:</strong> approved design + NFC chip per medal + programming one link for the batch + manufacturing.' },
          custom: { name: 'Custom design', details: 'A medal with an idea unique to your brand — we design a custom shape from scratch instead of the traditional form. Suitable for 3D shapes, sculptural designs, special campaigns and National Day, and orders that need a different execution.<br><br><em>Example:</em> a medal shaped like a dallah (3D), a cup, your brand product, a special icon, or a fully geometric design.<br><br><strong>Price:</strong> quoted after review of the idea, complexity and quantity.' },
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
      { re: /^تم إضافة (.+) — (.+) \(طلب عرض سعر\) للسلة$/, gen: m => `Added ${m[1]} — ${m[2]} (quote request) to the cart` },
      { re: /^تم إضافة (\d+) × (.+) للسلة$/, gen: m => `Added ${m[1]} × ${m[2]} to the cart` },
      { re: /^تبدأ من (\d+) ر\.س$/, gen: m => `Starts from ${m[1]} SAR` },
      { re: /^للـ (.+) قطعة$/, gen: m => `for ${m[1]} pcs` },
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
      { re: /^Added (.+) — (.+) \(quote request\) to the cart$/, gen: m => `تم إضافة ${m[1]} — ${m[2]} (طلب عرض سعر) للسلة` },
      { re: /^Added (\d+) × (.+) to the cart$/, gen: m => `تم إضافة ${m[1]} × ${m[2]} للسلة` },
      { re: /^Starts from (\d+) SAR$/, gen: m => `تبدأ من ${m[1]} ر.س` },
      { re: /^for (.+) pcs$/, gen: m => `للـ ${m[1]} قطعة` },
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
          if (en.tagline !== undefined) p.tagline = en.tagline;
          if (en.specs) p.specs = en.specs.slice();
          if (en.badge !== undefined) p.badge = en.badge;
          if (en.addons && p.addons) {
            p.addons.forEach(a => { if (en.addons[a.id]) a.label = en.addons[a.id]; });
          }
          // Variants (name + details) — للمنتجات ذات variants فقط
          if (en.variants && Array.isArray(p.variants)) {
            p.variants.forEach(v => {
              const evv = en.variants[v.id];
              if (evv) {
                if (evv.name) v.name = evv.name;
                if (evv.details !== undefined) v.details = evv.details;
              }
            });
          }
        } else {
          p.name = ar.name;
          p.category = ar.category;
          p.shortDesc = ar.shortDesc;
          if (ar.description !== undefined) p.description = ar.description;
          if (ar.tagline !== undefined) p.tagline = ar.tagline;
          if (ar.specs) p.specs = ar.specs.slice();
          if (ar.badge !== undefined) p.badge = ar.badge;
          if (ar.addons && p.addons) {
            p.addons.forEach((a, i) => { if (ar.addons[i]) a.label = ar.addons[i].label; });
          }
          // Variants — أعِد من النسخة العربية الأصلية
          if (Array.isArray(ar.variants) && Array.isArray(p.variants)) {
            p.variants.forEach((v, i) => {
              const arv = ar.variants[i];
              if (arv) {
                if (arv.name) v.name = arv.name;
                if (arv.details !== undefined) v.details = arv.details;
              }
            });
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
          const hasVariants = productHasVariants(p);
          const variant = hasVariants ? findVariant(p, item.variantId) : null;
          const hidePriceForItem = itemHidesPrice(item);

          msg += `• ${p.name}${NL}`;
          if (variant) {
            msg += `   Version: ${variant.name}${NL}`;
          }

          // Quantity — use package label for variants (e.g. "500+")
          let qtyText = String(item.qty);
          if (hasVariants && variant && variant.packages) {
            const pkg = findPackage(variant, item.qty);
            if (pkg) qtyText = packageQtyLabel(pkg);
          }
          if (!(hasVariants && variant && variant.hidePrice)) {
            msg += `   Quantity: ${qtyText}${NL}`;
          }

          if (SHOW_PRICES && !hidePriceForItem) {
            msg += `   Total: ${lineTotal} SAR${NL}`;
          } else if (hidePriceForItem) {
            msg += `   Price: To be quoted after review${NL}`;
          }

          if (SHOW_PRICES && !hasVariants && p.priceTiers && p.priceTiers.length > 1) {
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
                if (SHOW_PRICES) {
                  if (addon.price === 0 && addon.originalPrice) {
                    msg += `      • ${addon.label} — Included FREE (was ${addon.originalPrice} SAR)${NL}`;
                  } else if (addon.price === 0) {
                    msg += `      • ${addon.label} — Included FREE${NL}`;
                  } else if (addon.originalPrice && addon.originalPrice > addon.price) {
                    msg += `      • ${addon.label} — adds ${addon.price} SAR per piece (was ${addon.originalPrice} SAR)${NL}`;
                  } else {
                    msg += `      • ${addon.label} — adds ${addon.price} SAR per piece${NL}`;
                  }
                } else {
                  msg += `      • ${addon.label}${NL}`;
                }
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

      // إذا المودال مفتوح: أعِد رسم tagline وبلوك الخيارات والسعر (تستخدم بيانات مبدَّلة اللغة)
      const productModal = document.getElementById('productModal');
      if (productModal && !productModal.classList.contains('hidden') && currentProduct) {
        // اسم + تصنيف + tagline
        const catEl = document.getElementById('modalCategory');
        if (catEl) catEl.textContent = currentProduct.category;
        const nameEl = document.getElementById('modalName');
        if (nameEl) nameEl.textContent = currentProduct.name;
        const taglineEl = document.getElementById('modalTagline');
        if (taglineEl) {
          if (currentProduct.tagline) {
            taglineEl.textContent = currentProduct.tagline;
            taglineEl.classList.remove('hidden');
          } else { taglineEl.classList.add('hidden'); }
        }
        const descEl = document.getElementById('modalDescription');
        if (descEl) descEl.innerHTML = currentProduct.description;
        const specsEl = document.getElementById('modalSpecs');
        if (specsEl && currentProduct.specs) {
          specsEl.innerHTML = currentProduct.specs.map(s =>
            `<li class="flex items-start gap-2"><span class="text-brand-500">•</span><span>${s}</span></li>`
          ).join('');
        }
        if (typeof renderVariantBlock === 'function') renderVariantBlock();
        if (typeof renderModalPrice === 'function') renderModalPrice();
      }

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
                if (SHOW_PRICES) {
                  if (addon.price === 0 && addon.originalPrice) {
                    msg += `      • ${addon.label} — مشمول مجاناً (بدلاً من ${addon.originalPrice} ${CURRENCY})${NL}`;
                  } else if (addon.price === 0) {
                    msg += `      • ${addon.label} — مشمول مجاناً${NL}`;
                  } else if (addon.originalPrice && addon.originalPrice > addon.price) {
                    msg += `      • ${addon.label} — يضيف ${addon.price} ${CURRENCY} لكل قطعة (بدلاً من ${addon.originalPrice} ${CURRENCY})${NL}`;
                  } else {
                    msg += `      • ${addon.label} — يضيف ${addon.price} ${CURRENCY} لكل قطعة${NL}`;
                  }
                } else {
                  msg += `      • ${addon.label}${NL}`;
                }
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
