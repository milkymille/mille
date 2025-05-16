
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
       
        entry.target.classList.add('visible');
      } else {
        
        entry.target.classList.remove('visible');
      }
    });
  }, {
    threshold: 0.1,
  });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

  

  const text = "Now Loading...";
  const target = document.getElementById("loading-text");
  let i = 0;

  function showLetters() {
    if (i <= text.length) {
      target.textContent = text.substring(0, i);
      i++;
      setTimeout(showLetters, 200); 
    } else {
      i = 0;
      setTimeout(showLetters, 400); 
    }
  }

  showLetters();

 
  window.addEventListener("load", () => {
    setTimeout(() => {
      document.getElementById("loading-screen").style.display = "none";
    }, 3000); // 
  });



 

// =====skills部分の動き＝＝＝＝＝＝

document.addEventListener("DOMContentLoaded", () => {
  const targets = document.querySelectorAll('.bounce-image');

  const observer = new IntersectionObserver((entries) => {
    let delay = 100; // 1枚目も少し遅らせると確実にアニメする

    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('show');
        setTimeout(() => {
          entry.target.classList.add('show');
        }, delay);

        delay += 200;
      }
    });
  }, {
    threshold: 0.1
  });

  targets.forEach(target => observer.observe(target));
});








  
  document.addEventListener("DOMContentLoaded", function () {
    const target = document.querySelector(".strength-line");

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            observer.unobserve(entry.target); // 一度だけ発動
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    if (target) {
      observer.observe(target);
    }
  });

  const hamburger = document.querySelector('.circle-hamburger');
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
  });







  window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    const logoImgPC = document.querySelector(".logo img.pc");
    const logoImgSP = document.querySelector(".logo img.sp");

    // ヘッダーの高さを取得
    const headerHeight = header.offsetHeight;

    // ヘッダーよりスクロールしていたら画像を切り替える
    if (window.scrollY > headerHeight) {

      logoImgPC.src = "Photo/logo_white.png";
      logoImgSP.src = "Photo/logo_white.png";
    } else {
    
      logoImgPC.src = "Photo/logo_blue.png";
      logoImgSP.src = "Photo/logo_blue.png";
    }
  });




  document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".works_top_inner");
    const web = document.querySelector(".web");
    const graphic = document.querySelector(".graphic");

    buttons.forEach((button) => {
      button.addEventListener("click", function () {
        const target = this.getAttribute("data-filter");

        if (target === "web") {
          web.style.display = "block";
          graphic.style.display = "none";
        } else if (target === "graphic") {
          web.style.display = "none";
          graphic.style.display = "block";
        } else {
          web.style.display = "block";
          graphic.style.display = "block";
        }
      });
    });
  });


  const buttons = document.querySelectorAll(".works_top_inner");

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    buttons.forEach((btn) => btn.classList.remove("active"));
    this.classList.add("active");

    const target = this.getAttribute("data-filter");
    document.querySelector(".web").style.display =
      target === "web" ? "block" : "none";
    document.querySelector(".graphic").style.display =
      target === "graphic" ? "block" : "none";
  });
});






