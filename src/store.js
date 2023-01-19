import { reactive} from 'vue';

export const store = reactive({
    jumboSlides : [{
        background : 'src/assets/images/hero-07-2x.jpg',
        author : 'Damon Vaughn',
        newspaperArticle : 'Best-selling author and the most influential public intellectual in the western world right now.',
        newspaperSignature : '- The New York Times',
        buySection : {
            title : 'Last Book Release',
            subtitle : 'D.  VAUGHN AUTOBIOGRAPHY',
            body : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta nisi veniam nam aspernatur unde velit quidem?',
            image : 'src/assets/images/book-widget.png'
        }
    }],
    Section1 : {
        title : 'More About Damon Vaughn',
        body : 'damon Vaughn is a professor of psycology at the University of Toronto, a clinical psycologist and the author of the multi -milion copy bestseller "The story of my life"',
        buttonText : 'Meet The Author',
        buttonColor : 'green'
    },
    SectionLogos : [
        'src/assets/images/ebay-logotan-2x.png',
        'src/assets/images/audible-logotan-2x.png',
        'src/assets/images/bb-logotan-2x.png',
        'src/assets/images/kindlefire-logotan-2x.png'
    ],
    Section2 : {
        background : 'src/assets/images/banner.jpg',
        image : 'src/assets/images/audible-app-2x.png',
        title : 'New Audiobook',
        subtitle : 'NO TIME TO READ? NO PROBLEM. LISTEN TO IT',
        body : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae doloribus culpa ipsum rem repellat!',
        logos : [
            'src/assets/images/audible-logo.png',
            'src/assets/images/bn-logo-tall.png',
            'src/assets/images/kindle-logo-tall.png'
        ]
    },
    Section3 : {
        title : 'What The Critics Say',
        subtitle : 'TESTIMONIAL FROM AROUND THE WORLD',
        buttonText : 'Read All Testimonials',
        buttonColor : 'orange',
        mainCard : {
            image : 'src/assets/images/testimonial2-2x.jpg',
            title : 'Best Author Of His Generation',
            subtitle : 'This book will change your prospective on life',
            body : [
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil in voluptates quia deserunt quidem voluptas laborum, sapiente aliquam eaque repellendus ipsam, debitis, minus architecto minima reiciendis?',
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil in voluptates quia deserunt quidem voluptas laborum, sapiente aliquam eaque repellendus ipsam, debitis, minus architecto minima reiciendis?'],
            logo : 'src/assets/images/nytimes-logo-white-xsmall.png',
            author : 'Justine Kilpatrick',
            newspaper : 'The New York Times'
        },
        secondaryCards : [{
            title : 'A True Masterpiece, Bravo!',
            body : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil in voluptates quia deserunt quidem voluptas laborum, sapiente aliquam eaque repellendus ipsam, debitis, minus architecto minima reiciendis?',
            logo : 'src/assets/images/theguardian-xsmall.png',
            author : 'Gerard Hendley',
            newspaper : 'The Guardian'
        },{
            title : 'A Unique View On The World',
            body : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil in voluptates quia deserunt quidem voluptas laborum, sapiente aliquam eaque repellendus ipsam, debitis, minus architecto minima reiciendis?',
            logo : 'src/assets/images/globe-xsmall.png',
            author : 'Mary Maxey',
            newspaper : 'The Globe And Mail'
        }]
    },
    Section4 : {
        title : 'Upcoming Events',
        subtitle : 'MEET THE AUTHOR IN PERSON',
        cards : [{
                image : 'src/assets/images/event-05.jpg',
                title : 'Chicago Book Signing',
                body : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil in voluptates quia deserunt quidem voluptas laborum, sapiente aliquam',
            },{
                image : 'src/assets/images/event-04.jpg',
                title : 'Meet & Greet With Amanda',
                body : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil in voluptates quia deserunt quidem voluptas laborum, sapiente aliquam',
            },{
                image : 'src/assets/images/event-07.jpg',
                title : 'Open Book: Dialogues',
                body : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil in voluptates quia deserunt quidem voluptas laborum, sapiente aliquam',
            }]
    },
    Section5 : {
        title : 'Subscribe To My Newslatter',
        subtitle : 'BE NOTIFIED ABOUT BOOK SIGNING TOUR DATES',
        buttonText : 'Subscribe',
        buttonColor : 'green',
        body : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil in voluptates',
        image : 'src/assets/images/banner-2.jpg'
    },
    Section6 : {
        title : 'Dig A Little Deeper Into Damon Vaughn',
        subtitle : 'FIND OUT MORE ABOUT THE AUTHOR HIMSELF',
        cards : [{
                image : 'src/assets/images/box-1.jpg',
                title : 'About Me',
                subtitle : 'Lorem ipsum dolor sit',
            },{
                image : 'src/assets/images/box-4.jpg',
                title : 'My Latest Book',
                subtitle : 'Lorem ipsum dolor sit',
            },{
                image : 'src/assets/images/box-3.jpg',
                title : 'Book Signing',
                subtitle : 'Lorem ipsum dolor sit',
            }]
    }
});