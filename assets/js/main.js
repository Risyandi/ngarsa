// wow init
new WOW().init();

(function () {
    'use strict';

    var carousels = function () {
        $(".owl-carousel1").owlCarousel({
            loop: true,
            center: true,
            margin: 0,
            responsiveClass: true,
            nav: false,
            responsive: {
                0: {
                    items: 1,
                    nav: false
                },
                600: {
                    items: 1,
                    nav: false
                },
                1000: {
                    items: 3,
                    nav: true,
                    loop: false
                }
            }
        });

    }

    var carouselNews = function () {
        var owlNews = $(".owl-carousel2").owlCarousel({
            loop: true,
            center: false,
            margin: 0,
            responsiveClass: true,
            nav: true,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1,
                    nav: false
                },
                600: {
                    items: 2,
                    nav: false
                },
                1000: {
                    items: 3,
                    nav: true,
                    loop: true
                }
            }
        });

        $.ajax({
            url: 'https://wistaramedia.com/blog/wp-json/wp/v2/posts',
            dataType: 'json',
            success: function (data) {
                $.each(data, function (req, res) {
                    let idImages = res.id;
                    let desc = res.excerpt.rendered;
                    let imagesNews = res.better_featured_image.source_url;
                    let lengthDesc = 200;
                    let finalDesc = desc.substring(0, lengthDesc);

                    owlNews.trigger('add.owl.carousel', [
                        jQuery(`<div>
                        <div class="card text-center"><img class="card-img-top" src="${imagesNews}" alt="${"images-" + idImages}" >
                            <div class="card-body text-left pr-0 pl-0">
                                <h5>${res.title.rendered}</h5>
                                <p class="card-text" id="descNews">${finalDesc + "..."}</p>
                                <a href="${res.link}" target="_blank">READ MORE <i class="fa fa-angle-right" aria-hidden="true"></i></a>
                            </div>
                        </div>
                        </div>`)
                    ]);
                });
                owlNews.trigger('refresh.owl.carousel');
            }
        });

    };

    var checkPosition = function () {
        if ($(window).width() < 767) {
            $("#bg-services").attr("viewBox", "0 0 1050 800");
        }
    };

    var clickSend = function () {
        $('.send-message').on('click', function () {
            $('#send-message-yes').trigger("click");
        });
    };

    (function ($) {
        carousels();
        checkPosition();
        // carouselNews();
        clickSend();
    })(jQuery);
}());

// menu toggle button
function myFunction(x) {
    x.classList.toggle("change");
}

// widget whatsapp
let floatingBubble = document.getElementById('floating-bubble'),
    floatingClose = document.getElementById('floating-button'),
    textChatSend = document.getElementById('textarea-send-chat'),
    floatingStyle = document.getElementsByClassName('floating');

let styleFunction = function (style) {
    for (let index = 0; index < floatingStyle.length; index++) {
        floatingStyle[index].style.display = style;
    }
}

let openNewTab = function (url) {
    let win = window.open(url, '_blank');
    win.focus();
}

floatingBubble.addEventListener('mouseover', function () {
    styleFunction('flex');
}, false);

floatingBubble.addEventListener('click', function () {
    styleFunction('flex');
}, false);

floatingClose.addEventListener('click', function () {
    styleFunction('none');
}, false);

textChatSend.addEventListener('click', function () {
    let textChat = document.getElementById('textarea-chat').value;
    let encodeText = encodeURI(textChat);
    openNewTab('https://wa.me/6281380745594?text=' + encodeText + '');
}, false);

// change language
const bannerDesc = document.getElementById('banner-desc'),
    bannerDescContact = document.getElementById('banner-desc-contact'),
    footerContactName = document.getElementById('footer-contact-name'),
    footerContactEmail = document.getElementById('footer-contact-email'),
    footerContactMessage = document.getElementById('footer-contact-message'),
    footerDescContact = document.getElementById('footer-desc-contact'),
    footerDescPartner = document.getElementById('footer-partner'),
    footerDescFollowus = document.getElementById('footer-followus'),
    footerDescOurservice = document.getElementById('footer-ourservice'),
    formFullname = document.getElementById('full-name'),
    formEmail = document.getElementById('email'),
    formMessage = document.getElementById('message'),
    formSend = document.getElementById('form-send'),
    formMandatory = document.getElementById('mandatory'),
    aboutDesc1 = document.getElementById('about-desc1'),
    aboutDesc2 = document.getElementById('about-desc2'),
    aboutDesc3 = document.getElementById('about-desc3'),
    aboutDesc4 = document.getElementById('about-desc4'),
    serviceDesc1 = document.getElementById('service-desc1'),
    serviceDesc2 = document.getElementById('service-desc2'),
    serviceItemTitle1 = document.getElementById('service-item-title1'),
    serviceItemDesc1 = document.getElementById('service-item-desc1'),
    serviceItemTitle2 = document.getElementById('service-item-title2'),
    serviceItemDesc2 = document.getElementById('service-item-desc2'),
    serviceItemTitle3 = document.getElementById('service-item-title3'),
    serviceItemDesc3 = document.getElementById('service-item-desc3'),
    serviceItemTitle4 = document.getElementById('service-item-title4'),
    serviceItemDesc4 = document.getElementById('service-item-desc4'),
    whyUsTitle = document.getElementById('whyus-title'),
    whyUsSubTitle1 = document.getElementById('whyus-sub-title1'),
    whyUsSubDesc1 = document.getElementById('whyus-sub-desc1'),
    whyUsSubTitle2 = document.getElementById('whyus-sub-title2'),
    whyUsSubDesc2 = document.getElementById('whyus-sub-desc2'),
    whyUsSubTitle3 = document.getElementById('whyus-sub-title3'),
    whyUsSubDesc3 = document.getElementById('whyus-sub-desc3'),
    footerOurServiceItem1 = document.getElementById('footer-ourservice-item1'),
    footerOurServiceItem2 = document.getElementById('footer-ourservice-item2'),
    footerOurServiceItem3 = document.getElementById('footer-ourservice-item3'),
    footerOurServiceItem4 = document.getElementById('footer-ourservice-item4'),
    menu1 = document.getElementById('menu1'),
    menu2 = document.getElementById('menu2'),
    menu3 = document.getElementById('menu3'),
    menu4 = document.getElementById('menu4');

const language = {
    id: {
        menu: {
            menu1: "Beranda",
            menu2: "Layanan",
            menu3: "Tentang",
            menu4: "Kontak",
        },
        banner: {
            desc: "Di ngarsa digital kami membuat dengan kualitas untuk mendapatkan keunggulan dari sesuatu yang kami lakukan, dan kami memberikan solusi untuk memecahkan masalah Anda.",
        },
        about: {
            desc1: "Kami adalah Agensi Digital Kreatif.",
            desc2: "Ngarsa Digital sebuah Creative Digital Agency. Kami berspesialisasi dalam memberikan strategi dan solusi kreatif digital kepada Klien kami.",
            desc3: "Misi kami adalah menyediakan komunikasi strategis yang bertujuan untuk menyampaikan proposisi penjualan yang jelas dan unik serta layanan digital kreatif berkualitas tinggi bagi merek lokal Indonesia untuk melakukan percakapan yang bermakna dengan konsumen mereka, disampaikan secara konsisten dalam waktu secepat mungkin.",
            desc4: "*) /ng-/arsa artinya yaitu (depan/mulai/utama)"
        },
        services: {
            desc1: "Jelajahi Layanan Yang Kami Tawarkan Untuk Anda",
            desc2: "Kami dapat membantu Anda mewujudkan proyek digital Anda seperti website company profile, desain grafis, desain web, fotografi, dan mendukung kinerja bisnis Anda menggunakan teknologi Marketing.",
            item: [
                {
                    title: "Web & Kreatif",
                    desc: "Kami membuat desain web dan interaktif menjadi sederhana dan ikonik.",
                },
                {
                    title: "Teknologi Pemasaran",
                    desc: "Kami memberikan solusi untuk menyampaikan kampanye dengan Teknologi Pemasaran yang jelas dan unik.",
                },
                {
                    title: "SEO & Analitik",
                    desc: "Kami mempercepat halaman Anda untuk ditemukan dalam pencarian.",
                },
                {
                    title: "Desain & Merek",
                    desc: "Kami membuat desain yang simpel, elegan dan ikonik. untuk merek Anda.",
                }
            ],
        },
        whyus:
        {
            title: "Mengapa Kami",
            sub: [{
                title: "Hasil Berkualitas",
                desc: "Di ngarsa digital, kami memberikan kualitas terbaik sesuai dengan yang anda butuhkan.",
            },
            {
                title: "Harga Terjangkau",
                desc: "Di ngarsa digital kami memberikan harga yang relatif murah dan berkualitas.",
            },
            {
                title: "Dukungan & Konsultasi Gratis",
                desc: "Di ngarsa digital, kami mendukung dan memberikan konsultasi tentang digital kreatif dan strategi komunikasi pemasaran.",
            }]
        },
        send: 'Kirim',
        contact: { title: "Kontak Kami", name: "Nama Lengkap *", message: "Pesan *", email: "Alamat Surel *" },
        partner: 'Mitra',
        followus: "Ikuti Kami",
        ourservices: "Layanan Kami",
        placeholder: {
            name: "Masukkan Nama Lengkap Disini",
            email: "Masukkan Alamat Surel Disini",
            message: "Masukkan Pesan Disini",
            mandatory: "(*) Wajib di isi"
        }
    },
    en: {
        menu: {
            menu1: "Home",
            menu2: "Services",
            menu3: "About",
            menu4: "Contact",
        },
        banner: {
            desc: "At ngarsa digital we made with quality for getting excellence of something we do, and we provide solutions to solve your problems.",
        },
        about: {
            desc1: "We are a Creative Digital Agency.",
            desc2: "Ngarsa Digital a Creative Digital Agency. We specialize in giving digital creative strategies and solutions to our Clients.",
            desc3: "We mission is to provide strategic communications that aim at delivering a clear and unique selling proposition and high-quality creative digital services for Indonesian local brands to have meaningful conversations with their consumers, delivered consistently in the fastest time possible.",
            desc4: "*) /ng-/arsa is has meaning namely (front/start/main)"
        },
        services: {
            desc1: "Explore The Services We Offer For You",
            desc2: "We can help you realize your digital project such as a website company profile, graphic design, web design, photography, and support your business performance using Marketing technology.",
            item: [
                {
                    title: "Web & Creative",
                    desc: "We makes web and interactive design a simple and iconic.",
                },
                {
                    title: "Marketing Technology",
                    desc: "We provide solution for delivering campaign with Marketing Technology clear and unique.",
                },
                {
                    title: "SEO & Analytics",
                    desc: "We accelerate up your page to be found in search.",
                },
                {
                    title: "Design & Branding",
                    desc: "We makes design a simple, elegant and iconic. for your brands",
                }
            ],
        },
        whyus:
        {
            title: "Why Us",
            sub: [{
                title: "Quality Results",
                desc: "At ngarsa digital, we provide the best quality according to what you need.",
            },
            {
                title: "Affordable Pricing",
                desc: "At ngarsa digital, we provide relatively cheap and high-quality prices.",
            },
            {
                title: "Free Support & Consultation",
                desc: "At ngarsa digital, we support and provide consultation about creative digital and marketing communications strategy.",
            }]
        },
        send: "Send",
        contact: {
            title: "Contact Us",
            name: "Full Name *",
            message: "Message *",
            email: "Email *"
        },
        partner: "Partner",
        followus: "Follow Us",
        ourservices: "Our Services",
        placeholder: {
            name: "Enter your full name here",
            email: "Enter your email here",
            message: "Enter your message here",
            mandatory: "(*) required to filled"
        }
    }
}

const changesLanguage = function (lang) {
    if (lang !== "id") {
        bannerDesc.textContent = language.en.banner.desc;
        bannerDescContact.textContent = language.en.contact.title;
        footerDescContact.textContent = language.en.contact.title;
        footerContactName.textContent = language.en.contact.name;
        footerContactEmail.textContent = language.en.contact.email;
        footerContactMessage.textContent = language.en.contact.message;
        footerDescPartner.textContent = language.en.partner;
        footerDescFollowus.textContent = language.en.followus;
        footerDescOurservice.textContent = language.en.ourservices;
        formFullname.placeholder = language.en.placeholder.name;
        formEmail.placeholder = language.en.placeholder.email;
        formMessage.placeholder = language.en.placeholder.message;
        formMandatory.textContent = language.en.placeholder.mandatory;
        formSend.textContent = language.en.send;
        aboutDesc1.textContent = language.en.about.desc1;
        aboutDesc2.textContent = language.en.about.desc2;
        aboutDesc3.textContent = language.en.about.desc3;
        aboutDesc4.textContent = language.en.about.desc4;
        serviceDesc1.textContent = language.en.services.desc1;
        serviceDesc2.textContent = language.en.services.desc2;
        serviceItemTitle1.textContent = language.en.services.item[0].title;
        serviceItemDesc1.textContent = language.en.services.item[0].desc;
        serviceItemTitle2.textContent = language.en.services.item[1].title;
        serviceItemDesc2.textContent = language.en.services.item[1].desc;
        serviceItemTitle3.textContent = language.en.services.item[2].title;
        serviceItemDesc3.textContent = language.en.services.item[2].desc;
        serviceItemTitle4.textContent = language.en.services.item[3].title;
        serviceItemDesc4.textContent = language.en.services.item[3].desc;
        whyUsTitle.textContent = language.en.whyus.title;
        whyUsSubTitle1.textContent = language.en.whyus.sub[0].title;
        whyUsSubDesc1.textContent = language.en.whyus.sub[0].desc;
        whyUsSubTitle2.textContent = language.en.whyus.sub[1].title;
        whyUsSubDesc2.textContent = language.en.whyus.sub[1].desc;
        whyUsSubTitle3.textContent = language.en.whyus.sub[2].title;
        whyUsSubDesc3.textContent = language.en.whyus.sub[2].desc;
        footerOurServiceItem1.textContent = language.en.services.item[0].title;
        footerOurServiceItem2.textContent = language.en.services.item[1].title;
        footerOurServiceItem3.textContent = language.en.services.item[2].title;
        footerOurServiceItem4.textContent = language.en.services.item[3].title;
        menu1.textContent = language.en.menu.menu1;
        menu2.textContent = language.en.menu.menu2;
        menu3.textContent = language.en.menu.menu3;
        menu4.textContent = language.en.menu.menu4;
    } else {
        bannerDesc.textContent = language.id.banner.desc;
        bannerDescContact.textContent = language.id.contact.title;
        footerDescContact.textContent = language.id.contact.title;
        footerContactName.textContent = language.id.contact.name;
        footerContactEmail.textContent = language.id.contact.email;
        footerContactMessage.textContent = language.id.contact.message;
        footerDescPartner.textContent = language.id.partner;
        footerDescFollowus.textContent = language.id.followus;
        footerDescOurservice.textContent = language.id.ourservices;
        formFullname.placeholder = language.id.placeholder.name;
        formEmail.placeholder = language.id.placeholder.email;
        formMessage.placeholder = language.id.placeholder.message;
        formMandatory.textContent = language.id.placeholder.mandatory;
        formSend.textContent = language.id.send;
        aboutDesc1.textContent = language.id.about.desc1;
        aboutDesc2.textContent = language.id.about.desc2;
        aboutDesc3.textContent = language.id.about.desc3;
        aboutDesc4.textContent = language.id.about.desc4;
        serviceDesc1.textContent = language.id.services.desc1;
        serviceDesc2.textContent = language.id.services.desc2;
        serviceItemTitle1.textContent = language.id.services.item[0].title;
        serviceItemDesc1.textContent = language.id.services.item[0].desc;
        serviceItemTitle2.textContent = language.id.services.item[1].title;
        serviceItemDesc2.textContent = language.id.services.item[1].desc;
        serviceItemTitle3.textContent = language.id.services.item[2].title;
        serviceItemDesc3.textContent = language.id.services.item[2].desc;
        serviceItemTitle4.textContent = language.id.services.item[3].title;
        serviceItemDesc4.textContent = language.id.services.item[3].desc;
        whyUsTitle.textContent = language.id.whyus.title;
        whyUsSubTitle1.textContent = language.id.whyus.sub[0].title;
        whyUsSubDesc1.textContent = language.id.whyus.sub[0].desc;
        whyUsSubTitle2.textContent = language.id.whyus.sub[1].title;
        whyUsSubDesc2.textContent = language.id.whyus.sub[1].desc;
        whyUsSubTitle3.textContent = language.id.whyus.sub[2].title;
        whyUsSubDesc3.textContent = language.id.whyus.sub[2].desc;
        footerOurServiceItem1.textContent = language.id.services.item[0].title;
        footerOurServiceItem2.textContent = language.id.services.item[1].title;
        footerOurServiceItem3.textContent = language.id.services.item[2].title;
        footerOurServiceItem4.textContent = language.id.services.item[3].title;
        menu1.textContent = language.id.menu.menu1;
        menu2.textContent = language.id.menu.menu2;
        menu3.textContent = language.id.menu.menu3;
        menu4.textContent = language.id.menu.menu4;
    }
}