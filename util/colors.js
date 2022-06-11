//If you write your own code, remember hex color shortcuts (eg., #fff, #000)

/**
 * From https://stackoverflow.com/a/21648508/14804912
 *
 * call: hexToRgbA("#fbafff");
 *
 * returned value: "rgba(251,175,255,1)"
 *
 * @param hex Color in hex code format `#XXXXXX`
 * @param alpha Alpha/transparency of the color provided in `hex`. Must be between 0 and 1. This function does not check this.
 * @returns a string containing the `hex` argument in RGBA form
 */
const hexToRGBA = (hex, alpha) => {
  var c;
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split("");
    if (c.length == 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c = "0x" + c.join("");
    return `rgba(${[(c >> 16) & 255, (c >> 8) & 255, c & 255].join(
      ","
    )}, ${alpha})`;
  }
  throw new Error("Bad Hex");
};

module.exports = { hexToRGBA };
