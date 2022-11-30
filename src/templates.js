import {row, col, css} from './utils'

function title(block) {
    const {tag = 'h1', styles} = block.options
    return row(col(`<${tag}>${block.value}</${tag}>`), css(styles))
}

function text(block) {
    return row(col(`<p>${block.value}</p>`), css(block.options.styles))

}

function columns(block) {
    const html = block.value.map(item => col(item))
    return row(html.join(''), css(block.options.styles))

}

function image(block) {
    const {imageStyles, alt = {}, styles} = block.options
    return row(`<img src="${block.value}" alt="${alt}" style="${css(imageStyles)}"">`, css(styles))
}

export const templates = {
    'title': title,
    'text': text,
    'image': image,
    'columns': columns
}