
import { useState, useEffect } from "react";
import Auth from "./Auth";
import Admin from "./Admin";

function App() {
  const [language, setLanguage] = useState("TJ");
  const [showAuth, setShowAuth] = useState(false);
  const [showAdmin, setShowAdmin] = useState(false);

  const words = {
    TJ: {
      home: "Асосӣ", projects: "Лоиҳаҳои хайрия",
      about: "Дар бораи мо", contact: "Тамос",
      badge: "Платформаи байналмилалии хайриявӣ",
      title: "Бо ҳам метавонем зиндагиро тағйир диҳем",
      subtitle: "Дасти ёрӣ дароз кунем, умед бахшем ва ояндаи беҳтар созем.",
      explore: "Дидани лоиҳаҳо", support: "Кӯмак кардан",
      impact: "Некӣ аз як қадами хурд оғоз мешавад",
      projectsTitle: "Лоиҳаҳои хайриявӣ",
      projectsText: "Лоиҳаҳои тасдиқшудаи хайриявӣ дар ин ҷо ҷойгир карда мешаванд.",
      card1: "Кӯмак ба оилаҳои ниёзманд",
      card2: "Дастгирии кӯдакони ятим",
      card3: "Кӯмак ба табобати беморон",
      sample: "Намунаи намоишӣ",
      aboutTitle: "Дар бораи KHAIR TJ",
      aboutText: "KHAIR TJ платформаест барои пайвастани одамони хайрхоҳ бо ташаббусҳои хайриявӣ. Ҳадафи мо шаффофият, эътимод ва дастгирии инсонҳо мебошад.",
      contactTitle: "Якҷоя некӣ мекунем",
      contactText: "Барои пешниҳоди лоиҳаи хайриявӣ бо маъмурияти мо тамос гиред.",
      footer: "Ҳамаи ҳуқуқҳо ҳифз шудаанд."
    },
    RU: {
      home: "Главная", projects: "Благотворительность",
      about: "О нас", contact: "Контакты",
      badge: "Международная благотворительная платформа",
      title: "Вместе мы можем изменить жизнь",
      subtitle: "Помогаем друг другу, дарим надежду и создаём лучшее будущее.",
      explore: "Посмотреть проекты", support: "Помочь",
      impact: "Добро начинается с маленького шага",
      projectsTitle: "Благотворительные проекты",
      projectsText: "Здесь будут размещаться проверенные благотворительные проекты.",
      card1: "Помощь нуждающимся семьям",
      card2: "Поддержка детей-сирот",
      card3: "Помощь в лечении больных",
      sample: "Демонстрационный пример",
      aboutTitle: "О KHAIR TJ",
      aboutText: "KHAIR TJ — платформа, объединяющая добрых людей и благотворительные инициативы. Наша цель — прозрачность, доверие и помощь людям.",
      contactTitle: "Давайте творить добро вместе",
      contactText: "Чтобы предложить благотворительный проект, свяжитесь с нашей администрацией.",
      footer: "Все права защищены."
    },
    EN: {
      home: "Home", projects: "Charity Projects",
      about: "About Us", contact: "Contact",
      badge: "International Charity Platform",
      title: "Together, we can change lives",
      subtitle: "Helping each other, sharing hope and building a better future.",
      explore: "Explore Projects", support: "Donate",
      impact: "Kindness starts with one small step",
      projectsTitle: "Charity Projects",
      projectsText: "Verified charity campaigns will be published here.",
      card1: "Helping Families in Need",
      card2: "Supporting Orphaned Children",
      card3: "Medical Treatment Support",
      sample: "Demo example",
      aboutTitle: "About KHAIR TJ",
      aboutText: "KHAIR TJ connects generous people with charitable initiatives. Our mission is transparency, trust and helping people.",
      contactTitle: "Let's Make a Difference Together",
      contactText: "Contact our administration to propose a charity project.",
      footer: "All rights reserved."
    },
    ZH: {
      home: "首页", projects: "慈善项目",
      about: "关于我们", contact: "联系我们",
      badge: "国际慈善平台",
      title: "携手改变生活",
      subtitle: "互相帮助，传递希望，共创美好未来。",
      explore: "查看项目", support: "捐赠",
      impact: "善意始于小小的一步",
      projectsTitle: "慈善项目",
      projectsText: "经过审核的慈善项目将在这里发布。",
      card1: "帮助困难家庭",
      card2: "关爱孤儿",
      card3: "帮助病患治疗",
      sample: "演示示例",
      aboutTitle: "关于 KHAIR TJ",
      aboutText: "KHAIR TJ 连接爱心人士与慈善项目。我们的目标是透明、信任和帮助他人。",
      contactTitle: "让我们一起传递爱心",
      contactText: "如需提交慈善项目，请联系我们的管理员。",
      footer: "版权所有。"
    },
    AR: {
      home: "الرئيسية", projects: "المشاريع الخيرية",
      about: "معلومات عنا", contact: "اتصل بنا",
      badge: "منصة خيرية دولية",
      title: "معًا يمكننا تغيير الحياة",
      subtitle: "نساعد بعضنا وننشر الأمل ونبني مستقبلًا أفضل.",
      explore: "استكشف المشاريع", support: "تبرع",
      impact: "الخير يبدأ بخطوة صغيرة",
      projectsTitle: "المشاريع الخيرية",
      projectsText: "ستُنشر هنا المشاريع الخيرية التي تم التحقق منها.",
      card1: "مساعدة الأسر المحتاجة",
      card2: "دعم الأطفال الأيتام",
      card3: "المساعدة في علاج المرضى",
      sample: "مثال تجريبي",
      aboutTitle: "عن KHAIR TJ",
      aboutText: "تربط KHAIR TJ الأشخاص المحبين للخير بالمبادرات الخيرية. هدفنا هو الشفافية والثقة ومساعدة الناس.",
      contactTitle: "لنفعل الخير معًا",
      contactText: "لتقديم مشروع خيري، يرجى التواصل مع الإدارة.",
      footer: "جميع الحقوق محفوظة."
    }
  };

  const t = words[language];

  const [campaigns, setCampaigns] = useState(() => {
  const savedCampaigns = localStorage.getItem("khairCampaigns");

  if (savedCampaigns) {
    return JSON.parse(savedCampaigns);
  }

  return [
    { id: 1, title: t.card1 },
    { id: 2, title: t.card2 },
    { id: 3, title: t.card3 }
  ];
});
useEffect(() => {
  localStorage.setItem(
    "khairCampaigns",
    JSON.stringify(campaigns)
  );
}, [campaigns]);
  return (
    <div className="site" dir={language === "AR" ? "rtl" : "ltr"}>
      <style>{`
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; font-family: Arial, sans-serif; background: #f7faf8; color: #183b2d; }
        .site { min-height: 100vh; }
        .navbar {
          background: white; padding: 17px 7%; display: flex;
          justify-content: space-between; align-items: center;
          gap: 18px; flex-wrap: wrap; box-shadow: 0 2px 15px #173b2d0c;
        }
        .logo { color: #138451; font-size: 27px; font-weight: 900; letter-spacing: 1px; }
        .navlinks { display: flex; gap: 23px; align-items: center; flex-wrap: wrap; }
        .navlinks a { color: #315344; text-decoration: none; font-size: 14px; font-weight: 700; }
        .navlinks a:hover { color: #15945b; }
        select { padding: 10px; border: 1px solid #dce9e0; border-radius: 9px; background: white; color: #214a36; }
        .hero {
          padding: 85px 8%; min-height: 470px; display: flex;
          align-items: center; justify-content: space-between; gap: 35px;
          background: linear-gradient(120deg, #e5f6eb, #f7fcf8);
        }
        .hero-content { max-width: 650px; }
        .badge { color: #128451; font-size: 13px; font-weight: 800; letter-spacing: 1px; }
        .hero h1 { font-size: clamp(35px, 5vw, 58px); line-height: 1.15; margin: 20px 0; color: #16432f; }
        .hero p { color: #5d7568; font-size: 18px; line-height: 1.8; }
        .actions { display: flex; gap: 13px; flex-wrap: wrap; margin-top: 30px; }
        .btn { display: inline-block; padding: 14px 23px; border-radius: 9px; text-decoration: none; font-weight: 800; font-size: 14px; }
        .primary { background: #168653; color: white; }
        .secondary { background: white; color: #168653; border: 1px solid #168653; }
        .hero-art {
          width: 300px; height: 270px; flex-shrink: 0; border-radius: 35px;
          background: linear-gradient(145deg, #168653, #0d5737);
          display: flex; justify-content: center; align-items: center;
          color: white; font-size: 105px; box-shadow: 0 25px 55px #16865335;
        }
        .section { padding: 70px 8%; text-align: center; }
        .section h2 { color: #174630; font-size: 32px; margin: 0 0 14px; }
        .section-intro { color: #718176; line-height: 1.7; margin-bottom: 35px; }
        .cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 22px; text-align: left; }
        .campaign { background: white; border: 1px solid #e7eee9; border-radius: 17px; overflow: hidden; box-shadow: 0 8px 25px #183b2d09; }
        .campaign-art { height: 145px; display: flex; align-items: center; justify-content: center; font-size: 58px; background: #e7f5eb; }
        .campaign-body { padding: 22px; }
        .tag { color: #168653; font-size: 11px; font-weight: 800; background: #e9f7ee; padding: 7px 10px; border-radius: 20px; }
        .campaign h3 { color: #244b37; font-size: 19px; min-height: 45px; }
        .campaign p { color: #839087; font-size: 13px; line-height: 1.6; }
        .about { background: white; }
        .about p { max-width: 760px; margin: 20px auto; color: #66786d; line-height: 1.9; }
        .contact { background: #e8f6ed; }
        .footer { background: #123e2b; color: white; padding: 30px 8%; text-align: center; }
        .footer strong { font-size: 23px; color: #a8e7bf; }
        @media(max-width: 760px) {
          .hero { flex-direction: column; text-align: center; padding: 60px 7%; }
          .hero-art { width: 220px; height: 190px; font-size: 75px; }
          .actions { justify-content: center; }
          .cards { grid-template-columns: 1fr; }
          .navbar { justify-content: center; }
          .navlinks { justify-content: center; gap: 13px; }
        }
      `}</style>

      <header className="navbar">
        <div className="logo">♡ KHAIR TJ</div>
        <nav className="navlinks">
          <a href=" ">{t.home}</a >
          <a href="#projects">{t.projects}</a >
          <a href="#about">{t.about}</a >
          <a href="#contact">{t.contact}</a >
          <select value={language} onChange={(e) => setLanguage(e.target.value)}>
            <option value="TJ">Тоҷикӣ</option>
            <option value="RU">Русский</option>
            <option value="EN">English</option>
            <option value="ZH">中文</option>
            <option value="AR">العربية</option>
          </select>
                    <button
            onClick={() => setShowAuth(true)}
            style={{
              background: "#168653",
              color: "white",
              padding: "11px 17px",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer"
            }}
          >
            Воридшавӣ / Сабти ном
          </button>



        </nav>
      </header>

 {showAdmin ? (
  <Admin
  campaigns={campaigns}
onBack={() => setShowAdmin(false)}
onDeleteCampaign={(id) => {
  setCampaigns((previousCampaigns) =>
    previousCampaigns.filter(
      (campaign) => campaign.id !== id
    )
  );
}}
  onAddCampaign={(newCampaign) => {
    setCampaigns((previousCampaigns) => [
      ...previousCampaigns,
      { ...newCampaign, id: Date.now() }
    ]);

    setShowAdmin(false);
  }}
/>
) : showAuth ? (
  <Auth onBack={() => setShowAuth(false)} />
) : (
  <>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <div className="badge">{t.badge}</div>
            <h1>{t.title}</h1>
            <p>{t.subtitle}</p >
            <div className="actions">
              <a className="btn primary" href="#projects">{t.explore}</a >
              <a className="btn secondary" href="#contact">{t.support}</a >
            </div>
          </div>
          <div className="hero-art">♡</div>
        </section>

        <section className="section" id="projects">
          <h2>{t.projectsTitle}</h2>
          <p className="section-intro">{t.projectsText}</p >
          <div className="cards">
           
{campaigns.map((campaign, index) => (
  <article className="campaign" key={index}>
   

<div className="campaign-art">
  {campaign.imageUrl ? (
    <img
      src={campaign.imageUrl}
      alt={campaign.title}
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        borderRadius: "12px"
      }}
    />
  ) : (
    ["🏡", "📚", "❤️"][index % 3]
  )}
</div>

<div className="campaign-body">
  <span className="tag">
    {t.sample}
  </span>

  <h3>{campaign.title}</h3>

  <p>
    {campaign.description || "KHAIR TJ — Together for Humanity."}
  </p >

  {campaign.amount && (
    <p>
      Маблағи зарурӣ: {campaign.amount} сомонӣ
    </p >
  )}

  {campaign.videoUrl && (
    <div style={{ marginTop: "15px" }}>
      <a
        href= "_blank"
        rel="noopener noreferrer"
        style={{ color: "#087443", fontWeight: "bold" }}
      >
        ▶ Тамошои видеои лоиҳа
      </a >
    </div>
  )}
</div>
</article>
))}


          </div>
        </section>

        <section className="section about" id="about">
          <h2>{t.aboutTitle}</h2>
          <p>{t.aboutText}</p >
          <div className="badge">{t.impact}</div>
        </section>

        <section className="section contact" id="contact">
          <h2>{t.contactTitle}</h2>
          <p className="section-intro">{t.contactText}</p >
          <a className="btn primary" href="mailto:contact@khairtj.org">{t.contact}</a >
        </section>
      </main>

      <footer className="footer">
        <strong>KHAIR TJ</strong>
        <p>Together for Humanity.</p >
        <small>© 2026 KHAIR TJ. {t.footer}</small>
      </footer>
       </>
)}
    </div>
  );
}

export default App;
