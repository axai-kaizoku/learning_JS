'use strict';

// Logical AND and OR Assignment
let dataDownloaded = 10;

let hasBeenDownloaded = dataDownloaded === 100;
hasBeenDownloaded &&= 'Data download now complete...';

hasBeenDownloaded ||= 'Downloading...';

console.log(hasBeenDownloaded);