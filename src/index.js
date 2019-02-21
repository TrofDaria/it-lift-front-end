import './styles/main.scss';

import indexTemplate from './pages/index/index.hbs';
import articleTemplate from './components/article/article.hbs';
import spinner from './components/spinner/spinner.hbs';

const urls = [
    'data1.json',
    'data2.json',
    'data3.json',
    'data4.json'
];

document.addEventListener("DOMContentLoaded", function () {
    const root = $('#root');
    root.append(indexTemplate());
    const content = $('.content');
    content.append(spinner());
    let promises = [];
    for (var i = 0; i < urls.length; i++) {
        promises[i] = fetch("api/" + urls[i])
            .then((response) => {
                return response.json();
            }).catch(() => {
                return {data: []}
            })
    }

    Promise.all(promises).then(value => {
        content.empty();
        for (var i = 0; i < value.length; i++) {
            value[i].data.forEach((item) => {
                content.append(articleTemplate(item));
            });
        }
    })
});
