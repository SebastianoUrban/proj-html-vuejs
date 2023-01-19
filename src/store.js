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
    }]
});