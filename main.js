let joe = ['Joe Mandell', 23, 'SWE']
let [user, , job] = joe;

// console.log(user,job);

let isLoading = true;
let showUI = false;

[isLoading, showUI] = [showUI, isLoading]

// console.log(`isLoading: ${isLoading}`)
// console.log(`showUI: ${showUI}`)

