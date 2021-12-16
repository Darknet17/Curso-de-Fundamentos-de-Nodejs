# EventLoop: asíncrona por diseño

![Untitled](EventLoop%20asi%CC%81ncrona%20por%20disen%CC%83o%208f20bf6c6d1f42a6b5b66d9e39b608f9/Untitled.png)

![Untitled](EventLoop%20asi%CC%81ncrona%20por%20disen%CC%83o%208f20bf6c6d1f42a6b5b66d9e39b608f9/Untitled%201.png)

![Untitled](EventLoop%20asi%CC%81ncrona%20por%20disen%CC%83o%208f20bf6c6d1f42a6b5b66d9e39b608f9/Untitled%202.png)

![Untitled](EventLoop%20asi%CC%81ncrona%20por%20disen%CC%83o%208f20bf6c6d1f42a6b5b66d9e39b608f9/Untitled%203.png)

![Untitled](EventLoop%20asi%CC%81ncrona%20por%20disen%CC%83o%208f20bf6c6d1f42a6b5b66d9e39b608f9/Untitled%204.png)

![Untitled](EventLoop%20asi%CC%81ncrona%20por%20disen%CC%83o%208f20bf6c6d1f42a6b5b66d9e39b608f9/Untitled%205.png)

**Event Queue:** Contiene todos los eventos que se generan por nuestro código (Funciones, peticiones, etc.), estos eventos quedan en una cola que van pasando uno a uno al Event Loop.

**Event Loop:** Se encarga de resolver los eventos ultra rápidos que llegan desde el Event Queue. En caso de no poder resolverse rápido, enviá el evento al Thread Pool.

**Thread Pool:** Se encarga de gestionar los eventos de forma asíncrona. Una vez terminado lo devuelve al Event Loop. El Event Loop vera si lo pasa a Event Queue o no