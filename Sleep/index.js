// An async funtion that returns a Promise. The funtion will run after the number of milliseconds are over

async function sleep(millis) {
    await new Promise(resolve => setTimeout(resolve, millis));
}