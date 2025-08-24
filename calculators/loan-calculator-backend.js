

/* Data Structures 

class TestArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    
    return this.data;
  }
};

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
};

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  enqueue(value) {
    const node = new Node(value)

    if (this.length === 0) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }

    this.length++;

    return this;
  }

  dequeue() {
    const node = new Node(value)

    if (this.length === 0) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }

    this.length--;

    return this;
  }

  peek() {
    return this.last;
  }

  isEmpty() {
    if (this.first == null && this.last == null) {
      return true;
    } else {
      return false;
    }
  }

  size() {
    return this.length;
  }
}

const arr = new TestArray();
*/

/*
const http = require('http');

// Crear el servidor
const server = http.createServer((req, res) => {
  // Obtener método y URL
  const { method, url } = req;

  // Encabezados comunes de respuesta
  res.setHeader('Content-Type', 'application/json');

  // Manejo de rutas
  if (method === 'GET' && url === '/') {
    res.statusCode = 200;
    res.end(JSON.stringify({ mensaje: '¡Bienvenido al servidor!' }));

  } else if (method === 'GET' && url === '/usuarios') {
    const usuarios = [
      { id: 1, nombre: 'Ana' },
      { id: 2, nombre: 'Luis' }
    ];
    res.statusCode = 200;
    res.end(JSON.stringify(usuarios));

  } else if (method === 'POST' && url === '/mensaje') {
    let body = '';

    req.on('data', chunk => {
      body += chunk;
    });

    req.on('end', () => {
      try {
        const datos = JSON.parse(body);
        res.statusCode = 201;
        res.end(JSON.stringify({ recibido: datos }));
      } catch (error) {
        res.statusCode = 400;
        res.end(JSON.stringify({ error: 'JSON inválido' }));
      }
    });

  } else {
    res.statusCode = 404;
    res.end(JSON.stringify({ error: 'Ruta no encontrada' }));
  }
});

// Escuchar en el puerto 3000
server.listen(8080, () => {
  console.log('Servidor escuchando en http://localhost:3000');
});
*/