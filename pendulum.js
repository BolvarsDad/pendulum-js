const bob_radius = 5;
const origin_x = SIZE/2;
const origin_y = SIZE/2;

function pendulum(_links, _bobs) {
    let links = 1;
    let bobs  = 1;

    function grow() {
        links++;
        bobs++;

        if (links && bobs > 4) {
            console.log("Unable to grow further.");
            links = 4;
            bobs  = 4;
        }
    }

    function tellLength() {
        console.log(links);
    }

    function init(_links) {
        links  =  _links;
        bobs   =  _bobs;

        console.log("Pendulum initialized");

        return Object.seal({
            grow,
            tellLength,
            init
        });
    }

    return init(_links, _bobs);
}

ctx.moveTo(SIZE/2, SIZE/2);
ctx.beginPath();
ctx.fillStyle = colors[3];
ctx.arc(origin_x, origin_y, bob_radius, 0, 2*Math.PI);
ctx.stroke();
ctx.closePath();


ctx.moveTo(origin_x, origin_y);
ctx.beginPath();
ctx.lineTo(origin_x + 20, origin_y + 20);
ctx.stroke();
ctx.closePath();