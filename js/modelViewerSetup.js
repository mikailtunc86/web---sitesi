document.addEventListener('DOMContentLoaded', () => {

    /* === QUIZ CEVABI GÖSTER === */
    const quizButton = document.querySelector('.quiz-button');
    const quizAnswer = document.querySelector('.quiz-answer');
    quizButton.addEventListener('click', () => {
      quizAnswer.style.display = 'block';
      quizButton.disabled = true;
      quizButton.textContent = "Cevap Gösterildi";
    });
  
    /* === KÖŞE YAZILARI MODAL === (koseModal) */
    const articles = {
      kose1: {
        title: "Dilin İnsan Evrimindeki Eşsiz Rolü",
        content: `
          İnsanlık tarihine baktığımızda, bizi diğer canlılardan ayıran en önemli özelliklerden biri dil yeteneğimizdir. Dil, yalnızca bir iletişim aracı olmanın ötesinde, insan evriminin yapı taşlarından biri olarak karşımıza çıkar. Peki, dilin gelişimi insan türünün evrimini nasıl şekillendirdi?

<h4> - Dilin Evrimi: Bir Araçtan Daha Fazlası - </h4> 

İlk insan topluluklarının dil öncesi iletişim biçimleri büyük ölçüde jestlere, mimiklere ve sınırlı seslere dayanıyordu. Ancak, beynin prefrontal korteksindeki gelişimle birlikte, soyut düşünce ve karmaşık sosyal yapılar ortaya çıktı. Bu da daha gelişmiş bir iletişim sistemine duyulan ihtiyacı artırdı. Dil, bu ihtiyacın bir ürünü olarak şekillendi ve insan beyninin kapasitesini daha da genişleten bir faktör hâline geldi. Dilin gelişimiyle birlikte bilgi birikimi nesilden nesile aktarılmaya başladı ve bu durum kültürel evrim için bir dönüm noktası oldu.

<h4> - Düşüncenin ve İşbirliğinin Motoru - </h4>

Dil, yalnızca bireyler arasında iletişim kurmayı sağlamadı; aynı zamanda soyut düşüncenin de temelini oluşturdu. İnsanlar, dil sayesinde zaman, mekân ve hayalî kavramlar üzerinde düşünebildi. Bu yetenek, hayatta kalma stratejilerinin gelişmesini ve daha karmaşık sosyal organizasyonların kurulmasını sağladı. Örneğin, avlanma planlarının yapılması, tarım tekniklerinin paylaşılması ve hatta dini inançların temelleri, dil olmadan mümkün olamazdı.

<h4> - Beyni Şekillendiren Dil - </h4>

Dil, insan beyninin yapısında bile büyük değişikliklere yol açtı. Beyindeki Broca ve Wernicke bölgeleri, dil üretimi ve anlamlandırma için özelleşmiş alanlardır. İlginç bir şekilde, bu bölgelerin gelişimi, insan beyninin genel olarak daha büyük ve karmaşık bir yapıya evrilmesine katkı sağlamış olabilir. Araştırmalar, dil becerilerinin gelişiminin hafıza, problem çözme ve öğrenme kapasitesini de artırdığını göstermektedir.

<h4> - Dilin Sosyolojik Etkileri - </h4>

Dil, bireysel evrimden çok daha ötesini etkiledi: İnsan topluluklarının yapı taşını oluşturdu. Kolektif kimlikler, değerler ve normlar dil aracılığıyla şekillendi. Tarih boyunca, dil birliği, toplulukları daha güçlü ve dayanıklı kıldı. Aynı zamanda, farklı dillerin ortaya çıkışı, insan kültürünün çeşitliliğini besleyen bir unsur oldu.

<h4> - Dilin Evrimi Hâlâ Devam Ediyor - </h4>

Bugün dahi dil evrimi durmaksızın devam ediyor. Teknolojinin hızla ilerlemesiyle yeni kelimeler doğuyor, eski ifadeler anlam değiştiriyor. Dil, hâlâ hem birey hem de toplum için dönüşümün temel araçlarından biri olmaya devam ediyor. Ayrıca yapay zekâ ile dil arasındaki etkileşim, insanlığın dil aracılığıyla kendini yeniden tanımlamasına olanak sağlayabilir.

<h4> - Sonuç: Dilin Bizi İnsan Yapan Gücü - </h4>

Dilin, insan evriminin en kritik unsurlarından biri olduğu tartışmasız bir gerçektir. Hem bireysel hem de kolektif seviyede düşünceyi, işbirliğini ve kültürel mirası mümkün kılmıştır. İnsanlığın bugün sahip olduğu medeniyetin temelleri, büyük ölçüde dilin bu yaratıcı gücüne dayanmaktadır. Bu nedenle, dilin yalnızca bir iletişim aracı değil, insanı insan yapan en büyük güçlerden biri olduğunu unutmamak gerekir.
        `
      },
      kose2: {
        title: "Tarih Öncesi Mimari ve Günümüzün Yapıtaşları",
        content: `
         Mimari, insanlığın hayatta kalma mücadelesinin bir yan ürünü olarak ortaya çıksa da zamanla medeniyetlerin kimliğini belirleyen bir sanat dalına dönüştü. Tarih öncesi dönemlerin yalın yapıları, sadece barınma amacıyla üretilen çözümler değil, aynı zamanda bugün mimaride kullandığımız pek çok konseptin temel taşları oldu. Günümüzün çağdaş yapılarını incelerken, tarih öncesi mimarinin izlerini görmemek mümkün değil. Peki, bu kadim mimari anlayışın etkileri günümüz yapılarına nasıl yansıdı?
  
  <h4> - Doğanın Taklidi: Biyomimikri ve Organik Formlar -</h4>
  
  Tarih öncesi insanlar, çoğunlukla doğal çevrelerine uyum sağlayarak yapılar inşa ettiler. Mağara barınakları, kaya oyukları ve ağaç dallarından oluşan ilkel sığınaklar, doğanın sunduğu malzemeleri akıl dolu bir şekilde kullanma becerisinin bir göstergesiydi. Bu anlayış, günümüzde biyomimikri akımıyla yeniden canlandı. Modern mimaride, doğal formlardan esinlenen organik tasarımlar ve sürdürülebilir malzeme kullanımı, tarih öncesi mimarinin doğaya saygı anlayışının bir devamıdır.
  
  <h4> - Malzeme Kullanımında Sadelik ve Yenilik - </h4>
  
  Tarih öncesi insanlar, ahşap, taş ve kil gibi doğal malzemeleri kullanarak dayanıklı yapılar oluşturdular. Bu malzemeler, doğada kolayca bulunabiliyor ve çevreye zarar vermeden döngüsel bir şekilde kullanılabiliyordu. Günümüzde, minimalist tasarım ve yerel malzeme kullanımı gibi yaklaşımlar, tarih öncesi mimarinin yalın ama etkili özelliklerinden ilham alıyor.
  
  <h4> - Anıtlar ve Kolektif Hafıza - </h4>
  
  Tarih öncesi anıtlar, sadece birer yapı değil, aynı zamanda toplulukların sosyal ve dini merkezleriydi. Stonehenge gibi yapılar, mimarinin şekillendirdiği kolektif hafızanın en erken örneklerindendir. Bu anlayış, günümüzde büyük kamusal alanların ve anıtsal yapıların tasarımında kendini gösteriyor. Özellikle modern katedraller, anıtlar ve meydanlar, toplulukları bir araya getiren merkezler olma rolünü sürdürüyor.
  
  <h4> - Sosyal Bağlantılar ve Mekân Kullanımı - </h4>
  
  Tarih öncesi yerleşimlerinde ortak alanların varlığı dikkat çeker. Avlanma ve yemek yeme gibi kolektif aktiviteler, toplulukları bir arada tutuyordu. Günümüz mimarisinde topluluk alanları, ortak çalışma mekânları ve sosyal etkileşim için tasarlanan binalar, tarih öncesi toplulukların bir mirası olarak değerlendirilebilir.
  
  <h4> - Sürdürülebilirlik: Geçmişten Alınan Dersler - </h4>
  
  Tarih öncesi mimarinin en etkileyici yanı, çevreye duyarlı olmasıdır. Günümüz mimarisi, iklim değişikliğiyle müadele ederken geçmişteki bu duyarlı yaklaşımdan çok şey öğreniyor. Enerji verimli binalar, pasif tasarım teknikleri ve geri dönüştürülebilir malzemeler, tarih öncesi mimarinin sürdürülebilirlik mirasının bir devamıdır.
  
  <h4> - Sonuç: Geçmişten Geleceğe Taşınan Miras - </h4>
  
  Tarih öncesi mimari, insanın yaratıcılığının ve doğayla uyumunun bir kanıtıdır. Günümüzdeki modern yapılar, bu kadim geleneğin izlerini taşıyor. Mimari, geçmişte olduğu gibi bugün de sadece fiziksel alanlar inşa etmekle kalmıyor; aynı zamanda insanlığın tarihini, kimliğini ve geleceğini şekillendiriyor. Bu nedenle, her yeni bina, tarih öncesinden gelen bir hikâyenin devamıdır.
        `
      }
    };
    const koseModal = document.getElementById('koseModal');
    const closeBtn = koseModal.querySelector('.close');
    const modalTitle = koseModal.querySelector('.modal-title');
    const modalBody = koseModal.querySelector('.modal-body');
  
    document.querySelectorAll('.open-modal').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const articleId = link.getAttribute('data-article');
        if (articles[articleId]) {
          modalTitle.textContent = articles[articleId].title;
          modalBody.innerHTML = articles[articleId].content;
          koseModal.style.display = 'block';
        }
      });
    });
    closeBtn.addEventListener('click', () => {
      koseModal.style.display = 'none';
    });
    window.addEventListener('click', (e) => {
      if (e.target === koseModal) {
        koseModal.style.display = 'none';
      }
    });
  
    /* === KİTAP ANALİZİ MODAL (bookModal) === */
    const bookModal = document.getElementById('bookModal');
    const closeBookBtn = document.querySelector('.close-book');
    const bookModalTitle = document.getElementById('bookModalTitle');
    const bookModalBody = document.getElementById('bookModalBody');
  
    const bookAnalysisData = [
      {
        title: "Adam Smith - Ulusların Zenginliği (Derinlemesine Analiz 1)",
        content: `
          <h3>1. Giriş</h3>
          <img src="assets/images/analiz-1.jpg" alt="ulusların zenginliği">
          Mimari, insanlığın hayatta kalma mücadelesinin bir yan ürünü olarak ortaya çıksa da zamanla medeniyetlerin kimliğini belirleyen bir sanat dalına dönüştü. Tarih öncesi dönemlerin yalın yapıları, sadece barınma amacıyla üretilen çözümler değil, aynı zamanda bugün mimaride kullandığımız pek çok konseptin temel taşları oldu. Günümüzün çağdaş yapılarını incelerken, tarih öncesi mimarinin izlerini görmemek mümkün değil. Peki, bu kadim mimari anlayışın etkileri günümüz yapılarına nasıl yansıdı?
  
  <h4> - Doğanın Taklidi: Biyomimikri ve Organik Formlar -</h4>
  
  Tarih öncesi insanlar, çoğunlukla doğal çevrelerine uyum sağlayarak yapılar inşa ettiler. Mağara barınakları, kaya oyukları ve ağaç dallarından oluşan ilkel sığınaklar, doğanın sunduğu malzemeleri akıl dolu bir şekilde kullanma becerisinin bir göstergesiydi. Bu anlayış, günümüzde biyomimikri akımıyla yeniden canlandı. Modern mimaride, doğal formlardan esinlenen organik tasarımlar ve sürdürülebilir malzeme kullanımı, tarih öncesi mimarinin doğaya saygı anlayışının bir devamıdır.
  
  <h4> - Malzeme Kullanımında Sadelik ve Yenilik - </h4>
  
  Tarih öncesi insanlar, ahşap, taş ve kil gibi doğal malzemeleri kullanarak dayanıklı yapılar oluşturdular. Bu malzemeler, doğada kolayca bulunabiliyor ve çevreye zarar vermeden döngüsel bir şekilde kullanılabiliyordu. Günümüzde, minimalist tasarım ve yerel malzeme kullanımı gibi yaklaşımlar, tarih öncesi mimarinin yalın ama etkili özelliklerinden ilham alıyor.
  
  <h4> - Anıtlar ve Kolektif Hafıza - </h4>
  
  Tarih öncesi anıtlar, sadece birer yapı değil, aynı zamanda toplulukların sosyal ve dini merkezleriydi. Stonehenge gibi yapılar, mimarinin şekillendirdiği kolektif hafızanın en erken örneklerindendir. Bu anlayış, günümüzde büyük kamusal alanların ve anıtsal yapıların tasarımında kendini gösteriyor. Özellikle modern katedraller, anıtlar ve meydanlar, toplulukları bir araya getiren merkezler olma rolünü sürdürüyor.
  
  <h4> - Sosyal Bağlantılar ve Mekân Kullanımı - </h4>
  
  Tarih öncesi yerleşimlerinde ortak alanların varlığı dikkat çeker. Avlanma ve yemek yeme gibi kolektif aktiviteler, toplulukları bir arada tutuyordu. Günümüz mimarisinde topluluk alanları, ortak çalışma mekânları ve sosyal etkileşim için tasarlanan binalar, tarih öncesi toplulukların bir mirası olarak değerlendirilebilir.
  
  <h4> - Sürdürülebilirlik: Geçmişten Alınan Dersler - </h4>
  
  Tarih öncesi mimarinin en etkileyici yanı, çevreye duyarlı olmasıdır. Günümüz mimarisi, iklim değişikliğiyle müadele ederken geçmişteki bu duyarlı yaklaşımdan çok şey öğreniyor. Enerji verimli binalar, pasif tasarım teknikleri ve geri dönüştürülebilir malzemeler, tarih öncesi mimarinin sürdürülebilirlik mirasının bir devamıdır.
  
  <h4> - Sonuç: Geçmişten Geleceğe Taşınan Miras - </h4>
  
  Tarih öncesi mimari, insanın yaratıcılığının ve doğayla uyumunun bir kanıtıdır. Günümüzdeki modern yapılar, bu kadim geleneğin izlerini taşıyor. Mimari, geçmişte olduğu gibi bugün de sadece fiziksel alanlar inşa etmekle kalmıyor; aynı zamanda insanlığın tarihini, kimliğini ve geleceğini şekillendiriyor. Bu nedenle, her yeni bina, tarih öncesinden gelen bir hikâyenin devamıdır.
        `
      },
      {
        title: "Stephen P. Turner’ın Sosyal Teori ve Sosyoloji (Derinlemesine Analiz 2)",
        content: `
          <h3>1. Giriş</h3>
          <img src="assets/images/kitap-1.jpg" alt="Stephen P. Turner’ın Sosyal Teori ve Sosyoloji 2">
          <p>
            Stephen P. Turner - Sosyal Teori ve Sosyoloji Derinlemesine Analiz Raporu 
<h4>1. Giriş </h4>
Stephen P. Turner’ın Sosyal Teori ve Sosyoloji adlı eseri, sosyolojinin teorik temellerini tarihsel bir 
bağlamda ele alarak modern toplumsal yapılar üzerindeki etkilerini sorgulayan kapsamlı bir çalışmadır. 
Eser, klasik sosyal teorilerin sınırlarını eleştirirken, bilgi, otorite ve dayanışma gibi temel kavramların 
çağdaş toplumsal sorunlara uygulanabilirliğini derinlemesine inceler. Turner, sosyal teorinin 
sınırlamalarını eleştirirken, teorik araçların çağdaş toplumsal sorunları anlamada ve çözüm üretmede 
yetersiz kaldığını vurgular. Eser, sosyal teorinin eleştirel bir analizini sunmakla kalmayıp, birey-toplum 
ilişkisine dair yeni paradigmalar geliştirme gerekliliğini ortaya koyar. Bu rapor, Turner’ın teorik 
katkılarını ve eserin sinerjik ekonomi modeli gibi çağdaş kavramlarla ilişkisini incelemektedir. 
<h4>2. Ana Kavramlar ve Temalar</h4> 
<h4>1. Toplum ve Sosyal Teori:</h4> 
o Turner, toplum kavramının tarihsel gelişimini ve sosyal teorinin bu gelişime olan 
katkısını detaylı bir şekilde analiz eder. Özellikle birey ve topluluk arasındaki 
etkileşimin sosyolojik analizin merkezinde yer aldığını savunur. Bu yaklaşım, modern 
toplumların karmaşık yapısını anlamada kritik bir araçtır. 
<h4>2. Bilgi ve Otorite: </h4>
o Bilgi ve otorite arasındaki dinamikler, Turner’ın analizinde temel bir yer tutar. Bilginin 
toplumsal yapılar üzerindeki dönüştürücü etkisini vurgularken, otoritenin bu süreçteki 
rolünü eleştirel bir gözle değerlendirir. Örneğin, dijital platformların bilgi akışını 
düzenleyerek toplumsal algıları nasıl şekillendirdiği ve bu süreçte otorite figürlerinin 
etkisini artırdığı, modern toplumlardaki bilgi-otorite dinamiklerini anlamak için çarpıcı 
bir örnek sunar. Turner, bilgi ve otorite arasındaki ilişkiyi sorgularken, bu dinamiğin 
toplumsal dengeleri nasıl etkilediğini açıklamaktadır. 
<h4>3. Sosyal Teorinin Eleştirisi:</h4> 
o Klasik sosyal teorilerin modern toplumsal sorunları anlamada ve çözüm üretmede 
yetersiz kaldığını savunan Turner, bu teorilerin eksik yönlerine dikkat çeker. Örneğin, 
Durkheim’ın mekanik dayanışma kavramı, küreselleşme çağındaki bireysel kimlik ve 
çokkültürlülük olgusunu anlamakta yetersiz kalırken, Marx’ın üretim ilişkilerine 
odaklanması, modern hizmet sektörü ve dijital ekonominin karmaşıklığını açıklamada 
sınırlı kalmaktadır. Sosyal teorinin öznel ve nesnel unsurlarını dengeleyen daha 
yenilikçi bir yaklaşıma duyulan ihtiyacı vurgular. 
<h4>4. Dayanışma ve Toplumsal Yapı: </h4>
o Dayanışma, Turner’ın analizinde, toplumsal birleştirici bir kuvvet olarak ele alınır. 
Klasik dayanışma teorilerinin sınırlarını sorgulayan Turner, modern toplumlarda 
dayanışma kavramının yeniden tanımlanması gerektiğini savunur. Bu, birey ve 
topluluk arasındaki bağların güçlendirilmesi için önemli bir perspektif sunar. 
<h4>3. Tarihsel ve Kuramsal Bağlam</h4> 
<h4>1. Klasik Sosyolojinin Eleştirisi: </h4>
o Turner, Marx ve Durkheim gibi klasik sosyologların teorilerinin modern toplumsal 
karmaşıklığı anlamakta yetersiz olduğunu belirtir. Örneğin, Durkheim’ın organik 
dayanışma kavramı, günümüzün küreselleşmiş toplum yapısına uyum sağlamakta 
zorlanmaktadır. Turner, klasik teorilerin tarihsel önemini kabul etmekle birlikte, 
modern ihtiyaçlara yönelik teorik yeniliklerin gerekliliğini savunur. 
<h4>2. Bilginin Sosyal Dinamikleri:</h4> 
o Bilgi üretimi ve paylaşımı üzerine kapsamlı bir analiz sunan Turner, bilginin toplumsal 
yapılar üzerindeki etkisini inceler. Bilginin toplumsal otoriteyle olan ilişkisinin, sosyal 
teori açısından kritik bir unsur olduğunu vurgular. Özellikle, bilgi temelli otoritenin 
modern toplumların işleyişinde oynadığı merkezi rolü detaylandırır.  
<h4>4. Sonuç </h4>
Stephen P. Turner’ın Sosyal Teori ve Sosyoloji adlı eseri, klasik sosyal teorilerin sınırlamalarını 
eleştirerek modern toplumların ihtiyaçlarına yönelik teorik yeniliklerin önemini vurgular. Eser, bilgi ve 
dayanışma kavramlarının ekonomik ve toplumsal dönüşüm üzerindeki etkisini sinerjik ekonomi modeli 
çerçevesinde ele alarak, modern toplumsal sorunlara yenilikçi bir çözüm perspektifi sunmaktadır. 
Turner’ın analizleri, sosyal teorinin çağdaş toplumlar için nasıl bir rehber olabileceğini göstermektedir. 
        <h4>Yazan : Mikail Tunç</h4>
          </p>
          <!-- ... -->
        `
      }
    ];
  
    // "Tüm Analizleri Gör" butonları:
    const bookAnalysisButtons = document.querySelectorAll('.book-analysis-button');
    bookAnalysisButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const index = btn.getAttribute('data-index');
        const data = bookAnalysisData[index];
        bookModalTitle.textContent = data.title;
        bookModalBody.innerHTML = data.content;
        bookModal.style.display = 'block';
      });
    });
  
    closeBookBtn.addEventListener('click', () => {
      bookModal.style.display = 'none';
    });
    window.addEventListener('click', (e) => {
      if (e.target === bookModal) {
        bookModal.style.display = 'none';
      }
    });
  
    /* === KULLANICI DÜŞÜNCELERİ (SAĞDAKİ) === */
    const thoughtForm = document.querySelector('.thought-form');
    const thoughtTextarea = thoughtForm.querySelector('textarea');
    const thoughtList = document.getElementById('thoughtList');
  
    thoughtForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const text = thoughtTextarea.value.trim();
      if (text) {
        const div = document.createElement('div');
        div.className = 'thought-item';
        div.innerHTML = `
          <div class="thought-text">${text}</div>
          <div class="thought-actions">
            <i class="fas fa-thumbs-up"></i>
            <i class="fas fa-thumbs-down"></i>
            <span style="font-size:0.8rem; color:#999; cursor:pointer;">
              <i class="fas fa-comment-alt"></i> Yorum Yap
            </span>
          </div>
        `;
        thoughtList.prepend(div);
        thoughtTextarea.value = '';
      }
    });
  
    /* === PODCAST BEĞEN / BEĞENME + YORUM === */
    let podcastUserChoice = null; // "like", "dislike" veya null
    let podcastLikes = 0;
    let podcastDislikes = 0;
  
    const podcastLikeBtn = document.getElementById('podcastLikeBtn');
    const podcastDislikeBtn = document.getElementById('podcastDislikeBtn');
    const podcastLikeCount = document.getElementById('podcastLikeCount');
    const podcastDislikeCount = document.getElementById('podcastDislikeCount');
  
    podcastLikeBtn.addEventListener('click', () => {
      if (podcastUserChoice === null) {
        podcastLikes++;
        podcastUserChoice = "like";
      } else if (podcastUserChoice === "like") {
        podcastLikes--;
        podcastUserChoice = null;
      } else if (podcastUserChoice === "dislike") {
        podcastDislikes--;
        podcastLikes++;
        podcastUserChoice = "like";
      }
      updatePodcastLikes();
    });
  
    podcastDislikeBtn.addEventListener('click', () => {
      if (podcastUserChoice === null) {
        podcastDislikes++;
        podcastUserChoice = "dislike";
      } else if (podcastUserChoice === "dislike") {
        podcastDislikes--;
        podcastUserChoice = null;
      } else if (podcastUserChoice === "like") {
        podcastLikes--;
        podcastDislikes++;
        podcastUserChoice = "dislike";
      }
      updatePodcastLikes();
    });
  
    function updatePodcastLikes() {
      podcastLikeCount.textContent = podcastLikes;
      podcastDislikeCount.textContent = podcastDislikes;
    }
  
    // Podcast Yorumları
    const podcastCommentInput = document.getElementById('podcastCommentInput');
    const podcastCommentBtn = document.getElementById('podcastCommentBtn');
    const podcastCommentList = document.getElementById('podcastCommentList');
  
    podcastCommentBtn.addEventListener('click', () => {
      const text = podcastCommentInput.value.trim();
      if (text) {
        const cItem = document.createElement('div');
        cItem.className = 'comment-item';
        cItem.textContent = text;
        podcastCommentList.appendChild(cItem);
        podcastCommentInput.value = '';
      }
    });
  
  });
  