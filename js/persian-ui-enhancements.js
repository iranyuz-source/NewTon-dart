/* Extra Persian UI coverage for visible labels and dynamically generated content. */
(function () {
  'use strict';
  const extra = {
    'Active Tournament:':'مسابقه فعال:','Current tournament':'مسابقه جاری','This computer':'این دستگاه','Server':'سرور',
    'Storage --':'فضای ذخیره‌سازی --','New tournament':'مسابقه جدید','Name':'نام','Date':'تاریخ',
    'Import tournament':'درون‌ریزی مسابقه','Start a new tournament':'شروع مسابقه جدید','Create tournament':'ایجاد مسابقه',
    'Have a tournament file?':'فایل مسابقه دارید؟','Match history':'تاریخچه مسابقات','Payment':'پرداخت',
    'Pay here':'پرداخت در اینجا','Scan to pay the entry fee.':'برای پرداخت هزینه ورودی اسکن کنید.',
    'Saved players':'بازیکنان ذخیره‌شده','Import saved players':'درون‌ریزی بازیکنان ذخیره‌شده','Leaderboard':'جدول رده‌بندی',
    'Rank':'رتبه','Player':'بازیکن','Points':'امتیاز','Short legs':'لگ‌های کوتاه','High outs':'خروج‌های بالا',
    '180s':'۱۸۰ها','Tons':'امتیازهای ۱۰۰+','Legs won':'لگ‌های برده','Legs lost':'لگ‌های باخته',
    'No paid players yet.':'هنوز بازیکن پرداخت‌شده‌ای ثبت نشده است.','Match Controls':'کنترل مسابقات',
    'Finals':'فینال','Right':'راست','Middle':'وسط','Fit all':'نمایش کامل','Zoom out':'کوچک‌نمایی','Zoom in':'بزرگ‌نمایی',
    'Analytics':'گزارش‌ها و آمار','Live':'در حال برگزاری','Ready':'آماده','Completed':'پایان‌یافته','Waiting':'در انتظار',
    'Walkover':'برد بدون بازی','Throws first':'شروع‌کننده پرتاب','Setup':'تنظیمات','Registration':'ثبت‌نام',
    'Config':'تنظیمات','Console':'کنسول','Match Complete':'پایان مسابقه','Match Statistics':'آمار مسابقه',
    'Live Stats':'آمار زنده','Result QR':'QR نتیجه','Start':'شروع','Stop':'توقف','Complete':'پایان','Open':'باز کردن',
    'Show':'نمایش','Hide':'مخفی کردن','Clear':'پاک کردن','Apply':'اعمال','Remove player':'حذف بازیکن',
    'Delete player':'حذف بازیکن','Edit player':'ویرایش بازیکن','Add player':'افزودن بازیکن','Player name':'نام بازیکن',
    'Tournament name':'نام مسابقه','Entry fee':'هزینه ورودی','Payment status':'وضعیت پرداخت','Paid':'پرداخت‌شده',
    'Unpaid':'پرداخت‌نشده','Select':'انتخاب','Select player':'انتخاب بازیکن','Select tournament':'انتخاب مسابقه',
    'Search':'جست‌وجو','Filter':'فیلتر','All':'همه','Today':'امروز','Tomorrow':'فردا','Yesterday':'دیروز',
    'Previous':'قبلی','Next':'بعدی','Back':'بازگشت','Close':'بستن','Cancel':'لغو','Save':'ذخیره','Save changes':'ذخیره تغییرات',
    'Confirm':'تأیید','Delete':'حذف','Edit':'ویرایش','Import':'درون‌ریزی','Export':'خروجی','Export CSV':'خروجی CSV',
    'Export JSON':'خروجی JSON','Download':'دانلود','Upload':'بارگذاری','Documentation':'مستندات','Quick Start':'شروع سریع',
    'Contents':'فهرست مطالب','Help':'راهنما','About':'درباره','Version':'نسخه','Configuration':'پیکربندی',
    'General':'عمومی','Advanced':'پیشرفته','Enabled':'فعال','Disabled':'غیرفعال','Enable':'فعال‌سازی','Default':'پیش‌فرض',
    'Current':'جاری','New':'جدید','Old':'قبلی','Winner':'برنده','Loser':'بازنده','Round':'دور','Final':'فینال',
    'Semi Final':'نیمه‌نهایی','Semifinal':'نیمه‌نهایی','Quarter Final':'یک‌چهارم نهایی','Quarterfinal':'یک‌چهارم نهایی',
    'Single Elimination':'حذفی تک‌مرحله‌ای','Double Elimination':'حذفی دوگانه','Bye':'استراحت','BYE':'استراحت',
    'Winner advances':'برنده صعود می‌کند','Status':'وضعیت','Score':'امتیاز','Scores':'امتیازات','Results':'نتایج',
    'Statistics':'آمار','Tournaments':'مسابقات','Players':'بازیکنان','Matches':'مسابقات','Match':'مسابقه','Darts':'دارت',
    'Dart':'دارت','Lane':'لاین','Lanes':'لاین‌ها','Referee':'داور','Referees':'داوران','Random':'تصادفی',
    'Tie-Break':'تای‌بریک','Starting Player':'بازیکن شروع‌کننده','How many darts used?':'چند دارت استفاده شد؟',
    'Checkout!':'چک‌اوت!','Scored':'امتیاز ثبت‌شده','To Go':'باقی‌مانده'
    'Start Match':'شروع مسابقه','Stop Match':'توقف مسابقه','Upcoming':'پیش‌رو','UPCOMING':'پیش‌رو',
    'LIVE':'زنده','Live Matches':'مسابقات زنده','Ready Matches':'مسابقات آماده','Upcoming Matches':'مسابقات پیش‌رو',
    'No live matches':'مسابقه زنده‌ای وجود ندارد','No ready matches':'مسابقه آماده‌ای وجود ندارد','Lane:':'لاین:','Referee:':'داور:',
    'Wins':'برنده شد','Result ✓':'نتیجه ✓','Transfer':'ارسال به چالکر','Show Chalker QR code':'نمایش QR چالکر',
    'Send this match to a Chalker on the network':'ارسال این مسابقه به چالکر در شبکه',
    'A result has arrived from the Chalker — review and accept it':'نتیجه‌ای از چالکر دریافت شده است — بررسی و تأیید کنید',
    'Pending':'در انتظار','Started':'شروع‌شده','Unknown':'نامشخص','Blocked':'مسدود','Ready to Start':'آماده شروع',
    'Cannot Undo':'امکان بازگردانی نیست','Can Undo':'قابل بازگردانی','Undo match':'بازگردانی مسابقه','Undo match + achievements':'بازگردانی مسابقه + دستاوردها',
    'Could not find a completion for this match in the history to undo.':'رکورد پایان این مسابقه برای بازگردانی در تاریخچه پیدا نشد.',
    'No other matches will be affected.':'هیچ مسابقه دیگری تحت تأثیر قرار نمی‌گیرد.',
    'No bracket generated yet':'هنوز جدولی ایجاد نشده است','Achievements entered this session:':'دستاوردهای ثبت‌شده در این جلسه:',
    'Achievements were recorded automatically from Chalker visit scores.':'دستاوردها به‌صورت خودکار از امتیازهای ثبت‌شده در چالکر ثبت شده‌اند.',
    'Review the leaderboard.':'جدول رده‌بندی را بررسی کنید.',

    'Tournament Complete!':'مسابقات به پایان رسید!','Congratulations to all players!':'به همه بازیکنان تبریک می‌گوییم!',
    'Silver':'نقره','Gold':'طلا','Bronze':'برنز','Tournament Achievements':'دستاوردهای مسابقات','Player Achievements':'دستاوردهای بازیکنان',
    'Matches Played':'مسابقات انجام‌شده','Bracket Size':'اندازه جدول','Export Tournament Data':'خروجی اطلاعات مسابقات',
    'Download complete tournament results as JSON file':'دانلود نتایج کامل مسابقات به‌صورت فایل JSON',
    'Final Score (optional):':'نتیجه نهایی (اختیاری):','legs':'لگ','Confirm match winner':'تأیید برنده مسابقه',
    'Scan Results QR':'اسکن QR نتایج','Confirm Winner':'تأیید برنده','Edit Statistics':'ویرایش آمار',
    'Match':'مسابقه','Bracket':'جدول','Winner':'برنده','Loser':'بازنده',
    'LIVE Matches':'مسابقات زنده','Tournament in setup mode':'مسابقه در حالت تنظیمات است',
    'Add players and configure the tournament to generate matches.':'بازیکنان را اضافه و مسابقه را تنظیم کنید تا جدول مسابقات ایجاد شود.',
    'Tournament Configuration':'پیکربندی مسابقات','Point Values':'امتیازها','Participation':'شرکت',
    'High Out':'خروج بالا','Short Leg':'لگ کوتاه','Ton':'۱۰۰+','Regular Rounds':'دورهای عادی',
    'Quarterfinal':'یک‌چهارم نهایی','Bronze Match':'مسابقه رده‌بندی','Frontside Semifinal':'نیمه‌نهایی جدول برنده‌ها',
    'Backside Semifinal':'نیمه‌نهایی جدول بازنده‌ها','Backside Final':'فینال جدول بازنده‌ها','Grand Final':'فینال بزرگ',
    'Available':'در دسترس','Excluded':'حذف‌شده','No matches currently active or ready to start.':'در حال حاضر مسابقه فعال یا آماده شروع وجود ندارد.',
    'Statistics':'آمار','Quick Overview':'نمای کلی سریع','Transaction Health':'سلامت تراکنش‌ها','Match State':'وضعیت مسابقه',
    'Player Count':'تعداد بازیکنان','Lane Usage':'استفاده از لاین','localStorage Usage':'مصرف فضای ذخیره‌سازی',
    'Commands':'دستورات','View Transaction History':'مشاهده تاریخچه تراکنش‌ها','Manage Transaction Log':'مدیریت گزارش تراکنش‌ها',
    'Re-render Bracket':'بازرسم جدول','Recalculate Rankings':'محاسبه مجدد رده‌بندی','Refresh All Dropdowns':'تازه‌سازی همه فهرست‌ها',
    'Validate Everything':'اعتبارسنجی کامل','View Match Progression':'مشاهده روند مسابقات','Toggle Read-Only':'تغییر حالت فقط‌خواندنی',
    'QR Payload Inspector':'بازرس محتوای QR','Late Registration':'ثبت‌نام دیرهنگام','Reset All Config':'بازنشانی همه تنظیمات',
    'Last updated:':'آخرین به‌روزرسانی:','Console Output':'خروجی کنسول','Copy Log':'کپی گزارش','Clear Log':'پاک کردن گزارش',
    'Close':'بستن','Loading...':'در حال بارگذاری...','Initializing Developer Console...':'در حال راه‌اندازی کنسول توسعه‌دهنده...',
    'Result QR':'QR نتیجه','Scan QR Code':'اسکن کد QR','Cancel':'لغو',
    'Dashboard':'داشبورد','Leaderboard':'جدول رده‌بندی','Full Leaderboard':'جدول رده‌بندی کامل','Latest tournaments':'آخرین مسابقات',
    'All in the Register':'همه در ثبت‌نام','Played':'انجام‌شده','Unique':'منحصربه‌فرد','Total':'مجموع','No data yet':'هنوز داده‌ای وجود ندارد',
    'No player data available.':'داده‌ای برای بازیکنان وجود ندارد.','Players appear after your first tournament is finalized.':'بازیکنان پس از پایان اولین مسابقه نمایش داده می‌شوند.',
    'Loading…':'در حال بارگذاری…','Error loading players.':'خطا در بارگذاری بازیکنان.'

  };
  const keys=Object.keys(extra).sort((a,b)=>b.length-a.length);
  const esc=s=>s.replace(/[.*+?^()|[\\]\\]/g,'\\$&');
  function tr(v){
    if(!v || !/[A-Za-z]/.test(v)) return v;
    const lead=(v.match(/^\\s*/) || [''])[0], tail=(v.match(/\\s*$/) || [''])[0], core=v.trim();
    if(Object.prototype.hasOwnProperty.call(extra,core)) return lead+extra[core]+tail;
    let out=v;
    for(const k of keys) out=out.replace(new RegExp('\\b'+esc(k)+'\\b','gi'),extra[k]);
    return out;
  }
  function visit(n){
    if(n.nodeType===Node.TEXT_NODE){
      const p=n.parentElement;
      if(p && !/^(SCRIPT|STYLE|CODE|PRE|NOSCRIPT)$/i.test(p.tagName)) n.nodeValue=tr(n.nodeValue);
      return;
    }
    if(n.nodeType!==Node.ELEMENT_NODE || /^(SCRIPT|STYLE|CODE|PRE|NOSCRIPT)$/i.test(n.tagName)) return;
    n.childNodes.forEach(visit);
    ['placeholder','title','aria-label','aria-description'].forEach(a=>{
      if(n.hasAttribute(a)) n.setAttribute(a,tr(n.getAttribute(a)));
    });
  }
  function start(){
    document.documentElement.lang='fa'; document.documentElement.dir='rtl'; document.title=tr(document.title);
    visit(document.body);
    const obs=new MutationObserver(ms=>ms.forEach(m=>m.type==='characterData'?visit(m.target):m.addedNodes.forEach(visit)));
    obs.observe(document.body,{subtree:true,childList:true,characterData:true});
    window.NEWTON_PERSIAN_EXTRA={translate:tr};
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',start); else start();
})();