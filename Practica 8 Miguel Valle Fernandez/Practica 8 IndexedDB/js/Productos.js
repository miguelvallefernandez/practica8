"use strict";

function Category(titulo) {
    var _title = titulo;
    if (_title.length <= 0) {
        throw new EmptyValueException("Title");
    }

    Object.defineProperty(this, 'title', {
        get: function () {
            return _title;
        },
        set: function (titulo) {
            _title = titulo;
        }
    });

    var _description;

    Object.defineProperty(this, 'description', {
        get: function () {
            return _description;
        },
        set: function (description) {
            _description = description;
        }
    });
}

Category.prototype = {};
Category.prototype.constructor = Category;

function Product(serial, nombre, precio) {

    var _serialNumber = serial;
    if (_serialNumber.length <= 0) {
        throw new EmptyValueException("SerialNumber");
    }

    Object.defineProperty(this, 'serial', {
        get: function () {
            return _serialNumber;
        }
    });


    var _name = nombre;
    if (_name.length <= 0) {
        throw new EmptyValueException("Name");
    }

    Object.defineProperty(this, 'name', {
        get: function () {
            return _name;
        },
        set: function (name) {
            _name = name;
        }
    });

    var _description;

    Object.defineProperty(this, 'description', {
        get: function () {
            return _description;
        },
        set: function (description) {
            _description = description;
        }
    });


    var _price = precio;
    if (_price.length <= 0) {
        throw new EmptyValueException("Price");
    }

    Object.defineProperty(this, 'price', {
        get: function () {
            return _price;
        },
        set: function (price) {
            _price = price;
        }
    });

    var _tax;

    Object.defineProperty(this, 'tax', {
        get: function () {
            return _tax;
        },
        set: function (tax) {
            _tax = tax;
        }
    });

    var _images = [];


    Object.defineProperty(this, 'images', {
        get: function () {
            return _images;
        },
        set: function (images) {
            _images.push(images);
        }
    });
}

Product.prototype = {};
Product.prototype.constructor = Product;

Product.prototype.getObject = function () {
    return {
        serial: this.serial,
        name: this.name,
        description: this.description,
        images: this.images
    };
}

function DVD(titulo, autor, serial, nombre, precio) {
    var _title = titulo;
    var _author = autor;

    Object.defineProperty(this, 'autor', {
        get: function () {
            return _author;
        },
        set: function (autor) {
            _author = autor;
        }
    });

    Object.defineProperty(this, 'title', {
        get: function () {
            return _title;
        },
        set: function (title) {
            _title = title;
        }
    });

    Product.call(this, serial, nombre, precio);
}

DVD.prototype = Object.create(Product.prototype);
DVD.prototype.constructor = DVD;

DVD.prototype.getObject = function () {
    return {
        serial: this.serial,
        name: this.name,
        autor: this.autor,
        title: this.title,
        description: this.description,
        images: this.images
    };
}


function TV(modelo, serial, nombre, precio) {
    var _model = modelo;
    var _precio = precio;

    Object.defineProperty(this, 'modelo', {
        get: function () {
            return _model;
        },
        set: function (model) {
            _model = model;
        }
    });

    Object.defineProperty(this, 'precio', {
        get: function () {
            return _precio;
        },
        set: function (precio) {
            _precio = precio;
        }
    });

    Product.call(this, serial, nombre, precio);
}

TV.prototype = Object.create(Product.prototype);
TV.prototype.constructor = TV;

TV.prototype.getObject = function () {
    return {
        serial: this.serial,
        name: this.name,
        modelo: this.modelo,
        precio: this.precio,
        description: this.description,
        images: this.images
    };
}


function Smartphone(modelo, serial, nombre, precio) {
    var _model = modelo;
    var _precio = precio;

    Object.defineProperty(this, 'modelo', {
        get: function () {
            return _model;
        },
        set: function (model) {
            _model = model;
        }
    });

    Object.defineProperty(this, 'precio', {
        get: function () {
            return _precio;
        },
        set: function (precio) {
            _precio = precio;
        }
    });


    Product.call(this, serial, nombre, precio);
}

Smartphone.prototype = Object.create(Product.prototype);
Smartphone.prototype.constructor = Smartphone;

Smartphone.prototype.getObject = function () {
    return {
        serial: this.serial,
        name: this.name,
        modelo: this.modelo,
        precio: this.precio,
        description: this.description,
        images: this.images
    };
}


function Coords(latitud, longitud) {

    var _latitude = latitud;

    Object.defineProperty(this, 'latitude', {
        get: function () {
            return _latitude;
        },
        set: function (latitude) {
            _latitude = latitude;
        }
    });

    var _longitude = longitud;

    Object.defineProperty(this, 'longitude', {
        get: function () {
            return _longitude;
        },
        set: function (longitude) {
            _latitude = longitude;
        }
    });

}

Coords.prototype = {};
Coords.prototype.constructor = Coords;


function Shop(cif, nombre) {
    var _cif = cif;
    var _name = nombre;
    var _direction;
    var _telf;
    var _coords;
    var _images = [];

    Object.defineProperty(this, 'cif', {
        get: function () {
            return _cif;
        },
        set: function (cif) {
            _cif = cif;
        }
    });

    Object.defineProperty(this, 'name', {
        get: function () {
            return _name;
        },
        set: function (name) {
            _name = name;
        }
    });

    Object.defineProperty(this, 'direction', {
        get: function () {
            return _direction;
        },
        set: function (direction) {
            _direction = direction;
        }
    });

    Object.defineProperty(this, 'telf', {
        get: function () {
            return _telf;
        },
        set: function (telf) {
            _telf = telf;
        }
    });

    Object.defineProperty(this, 'coords', {
        get: function () {
            return _coords;
        },
        set: function (value) {

            if (!value instanceof Coords) throw new InvalidValueException("coords", value);
            _coords = value;
        }
    });


    Object.defineProperty(this, 'images', {
        get: function () {
            return _images;
        },
        set: function (images) {
            _images.push(images);
        }
    });


}

Shop.prototype = {};
Shop.prototype.constructor = Shop;

