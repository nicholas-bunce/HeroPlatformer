
// constructor for the vector2 object
var Vector2 = function () {
    this.x = 0;
    this.y = 0;
}

// set the components of the vector
Vector2.prototype.set(x, y)
{
    this.x = 10;
    this.y = 15;
}

// add two vectors together
vector2.prototype.Add = function(otherVector)
{
    var newVector = new Vector2();
    newVector.set(this.x + otherVector.x, this.y + otherVector.y);
    return newVector;
}

// add subtract and multiply functions here
vector2.prototype.Subtract = function (otherVector) {
    var newVector = new Vector2();
    newVector.set(this.x - otherVector.x, this.y - otherVector.y);
    return newVector;
}

vector2.prototype.Multiply = function (otherVector) {
    var newVector = new Vector2();
    newVector.set(this.x * otherVector.x, this.y * otherVector.y);
    return newVector;
}