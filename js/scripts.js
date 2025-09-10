
    document.addEventListener('DOMContentLoaded', async () => {
      // ฟังก์ชันช่วย inject ไฟล์ HTML เข้าไปในจุดที่กำหนด
      const inject = async (selector, path) => {
        const el = document.querySelector(selector);
        if (!el) return;
        try {
          const res = await fetch(path + '?_=' + Date.now(), { cache: 'no-cache' });
          if (!res.ok) throw new Error(res.status);
          el.innerHTML = await res.text();
        } catch (err) {
          console.error('โหลดไม่สำเร็จ:', path, err);
        }
      };

      // ดึง nav และ footer
      await inject('#nav', './component/nav.html');
      await inject('#footer', './component/footer.html');
    });      // Simple smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
