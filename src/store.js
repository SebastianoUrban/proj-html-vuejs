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
    }
});