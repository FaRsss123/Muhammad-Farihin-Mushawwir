
     // JavaScript for toggling the menu
document.getElementById("hamburger-icon").addEventListener("click", function () {
    const nav = document.querySelector(".nav");
    nav.style.display = nav.style.display === "flex" ? "none" : "flex";
  });
// sidebar  
const sidebar = document.querySelector('.sidebar');
const hamburgerIcon = document.getElementById('hamburger-icon');

hamburgerIcon.addEventListener('click', () => {
  sidebar.classList.toggle('open'); // Toggle visibility and sliding effect
});


            function sendMail() {
                Email.send({
                    Host: "smtp.gmail.com",
                    Username: "mfarihinmushawwir10@gmail.com", // Ganti dengan email Anda
                    Password: "Farihin7", // Ganti dengan password Anda (lebih baik menggunakan cara yang lebih aman)
                    To: 'muhfarihinmushawwir10@gmail.com', // Ganti dengan email tujuan
                    From: document.getElementById("email").value,
                    Subject: "New Contact Form Enquiry",
                    Body: "Nama: " + document.getElementById("nama").value
                        + "<br> Email: " + document.getElementById("email").value
                        + "<br> No Handphone: " + document.getElementById("NoHandphone").value
                }).then(
                    message => alert("Message Sent Successfully")
                ).catch(
                    error => alert("Error in sending: " + error)
                );
            }document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
    
                    document.querySelector(this.getAttribute('href')).scrollIntoView({
                        behavior: 'smooth'
                    });
                });
            });
        
            document.addEventListener('DOMContentLoaded'), function() {
                // Fungsi untuk memeriksa apakah elemen muncul di viewport
                function isElementInViewport(el) {
                    var rect = el.getBoundingClientRect();
                    return (
                        rect.top >= 0 &&
                        rect.left >= 0 &&
                        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
                    );
                }
            
             
                document.addEventListener('DOMContentLoaded', function() {
                    // Fungsi untuk memeriksa apakah elemen muncul di viewport
                    function isElementInViewport(el) {
                        var rect = el.getBoundingClientRect();
                        return (
                            rect.top >= 0 &&
                            rect.left >= 0 &&
                            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
                        );
                    }
                
                    // Fungsi untuk menambahkan kelas "show" ketika elemen masuk ke viewport
                    function checkPopUpElements() {
                        var popUpElements = document.querySelectorAll('.pop-up');
                        popUpElements.forEach(function(el) {
                            if (isElementInViewport(el)) {
                                el.classList.add('show');
                            }
                        });
                    }
                
                    // Event listener untuk scroll
                    window.addEventListener('scroll', checkPopUpElements);
                    window.addEventListener('resize', checkPopUpElements);
                
                    // Cek saat pertama kali halaman di-load
                    checkPopUpElements();
                });
              
            }
            document.addEventListener("DOMContentLoaded", function() {
                const elements = document.querySelectorAll('.fade-in'); // Select all elements with class fade-in
                
                const observer = new IntersectionObserver((entries, observer) => {
                  entries.forEach(entry => {
                    if (entry.isIntersecting) {
                      entry.target.classList.add('visible'); // Add visible class
                      observer.unobserve(entry.target); // Stop observing once the animation is triggered
                    }
                  });
                }, { threshold: 0.1 }); // 10% of the element must be visible to trigger
                
                elements.forEach(element => {
                  observer.observe(element); // Observe each element
                });
              });
              document.addEventListener("DOMContentLoaded", function() {
                const elements = document.querySelectorAll('.fade-in'); // Select all elements with fade-in class
            
                const observer = new IntersectionObserver((entries, observer) => {
                  entries.forEach(entry => {
                    if (entry.isIntersecting) {
                      entry.target.classList.add('visible'); // Add visible class when in view
                      observer.unobserve(entry.target); // Stop observing after animation triggers
                    }
                  });
                }, { threshold: 0.1 }); // Trigger when 10% of the element is visible
            
                elements.forEach(element => {
                  observer.observe(element); // Observe each element
                });
              });
              