import React from 'react';

function Footer() {
    return (
        <footer className="bg-body-tertiary text-center text-lg-start text-white" style={{ backgroundColor: '#ffff', borderTop: '1px solid #dee2e6', position: 'fixed', bottom: 0, left: 0, width: '100%' }}>
            <div className="container-fluid p-0"> {/* Utiliza container-fluid para ocupar toda la página */}
                <footer className="text-center text-lg-start text-white" style={{ backgroundColor: '#3e4551', padding: '20px 0' }}> {/* Ajusta el padding según sea necesario */}
                    <div className="text-center">
                        <section>
                            <div className="row justify-content-center"> {/* Agrega justify-content-center para centrar los elementos */}
                                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                    <h5 className="text-uppercase">Tienda Mercado</h5>
                                    {/* Contenido del footer */}
                                </div>
                                <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                                    <a href="/" className="text-white">Inicio</a>
                                </div>
                                <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                                    <a href="/productos" className="text-white">Productos</a>
                                </div>
                                
                                <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                                    <a href="/carrito" className="text-white">Carrito</a>
                                </div>

                                
                            </div>
                        </section>
                        <section className="mb-4 text-center">
                            {/* Iconos sociales */}
                        </section>
                        <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                            © 2024 tienda-articulo-cornej.com
                        </div>
                    </div>
                </footer>
            </div>
        </footer>
    );
}

export default Footer;
