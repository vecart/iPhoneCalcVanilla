const time = () => {
    let now = getTime();
    document.querySelector('.clock') = `${now}`
}
time();