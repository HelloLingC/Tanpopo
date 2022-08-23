const stack = new Array();

window.onpopstate = (event) => {
    if(stack.length == 1) {
        // Didn't set first page.
    } else {
        onLocationChanged(stack[stack.length - 2], stack.pop())
    }
}

export function onLocationChanged(current, last) {

}

export function setFirstPage(data) {
    if(data) {
        stack[0] = data;
    }
}

function navigate() {

}

export function forward(data, url) {
    stack[stack.length] = data;
    window.history.pushState(data, "", url)
}

function back() {

}

