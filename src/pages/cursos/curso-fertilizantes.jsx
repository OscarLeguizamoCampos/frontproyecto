import Submenu2 from "components/Submenu2"

const CursoFertilizantes = () => {
    return (
        <div>
            <Submenu2
                title1="SERVICIOS"
                subtitle1="INICIO"
                subtitle2="SERVICIOS"
                subtitle3="CURSO DE FERTILIZANTES"
                ruta1='/'
                ruta2='/cursos/menu-servicios'
            />
            <div className="relative  w-full top-7 m-auto">
                <div class="two text-xl text-center font-bold w-full mb-40">
                    FERTILIZACIÓN DEL CULTIVO DE CACAO
                </div>

                <div class="three w-7/12 text-justify text-lg  m-auto">
                    <p className="pb-8">Antes de iniciar cualquier tipo de fertilización es preciso conocer el nivel de fertilidad natural del suelo. Este
                        diagnóstico se hará por medio de análisis de suelo y análisis foliar. Este último análisis es quizá el más
                        recomendado en el caso de posibles deficiencias de elementos menores. Sobre la base de esa interpretación
                        se recomendarán los niveles de fertilización requeridos.</p>

                    <p className="pb-8">Una cosecha de cacao seco de 1000 Kg. extrae aproximadamente 44 Kg. De Nitrógeno (N), 10 Kg. de fosfato
                        (P2 O5) y 77 Kg. de potasio (K2O). Si las mazorcas se partieren en el mismo campo y las cáscaras quedasen
                        en el suelo, se reciclará aproximadamente 2 Kg. de N, 5 Kg. de P2O5 y 24 Kg. de K2O. Por lo tanto, todo suelo
                        que se explota tiende a empobrecerse y a reducir su capacidad de alimentar a las plantas, en consecuencia
                        decae la producción de frutos. Por lo que es necesario mejorar los suelos adicionando oportunamente abonos
                        orgánicos o fertilizantes químicos. </p>

                    <p className="pb-8">Del mismo modo, se recomienda la fertilización y mejora del suelo usando productos orgánicos como la roca
                        fosfórica (P2O5), compost, bocachi, cal dolomita, etc.</p>

                    <p className="pb-8">Las formulaciones se basan sobre los niveles de nitrógeno, fósforo y potasio que muestren los análisis de suelo
                        y en las proporciones que permitan obtener mayores repuestas de producción. Generalmente hay que hacer
                        aplicaciones de fertilizantes compuestos (N-P-K), aplicarlos edáficamente (Aplicación radicular), los elementos
                        menores se pueden aplicar foliares, son bien asimilados por las hojas.
                    </p>

                    <p className="pb-8">Al transplantar los arbolitos de cacao se debe fertilizar el sitio definitivo (Hoyo) de la siguiente manera: 150
                        gramos de cal dolomita + 80 gramos de roca fosfórica + 75 gramos de triple 15 o cafetero, estos fertilizantes se
                        deben mezclar uno a uno con el suelos que va tapar el hoyo. Cabe anotar que los hoyos deben tener las
                        siguientes medidas: 40 cm x 40cm x 40 cm. </p>

                    <h4 className="pb-8"><span className="font-bold">Tabla 1.</span> Recomendación de fertilizacion por planta de cacao </h4>

                    <table className="table-fixed border-collapse border-pro-100 pb-8">
                        <thead>
                            <tr className="m-8 bg-red-200 hover:bg-red-300 border-t border-l border-pro-100">
                                <th className="p-3   border-r w-1/4 border-pro-100" scope="col"></th>
                                <th className="p-3    text-center border-r w-1/3 border-pro-100" scope="col">Triple 15 o 12-24-12</th>
                                <th className="p-3    text-center border-r w-1/3 border-pro-100" scope="col">Cafetero</th>
                            </tr>
                        </thead>
                        <tbody className="pb-8 ">
                            <tr className="p-8 border border-pro-100">
                                <th className="pl-8 pt-1 pb-1 border border-pro-100" scope="row">Transplante</th>
                                <td className=" text-center border-r  border-pro-100">75-100 gramos/planta/año</td>
                                <td className=" text-center border-r  border-pro-100">75-125 gramos/planta/año</td>

                            </tr>

                            <tr className="p-8 border bg-red-100 hover:bg-red-200  border-pro-100">
                                <th className="pl-8 pt-1 pb-1 border border-pro-100" scope="row">1 año</th>
                                <td className=" text-center border-r  border-pro-100">150-225 gramos/planta/año</td>
                                <td className=" text-center border-r  border-pro-100">150-250 gramos/planta/año</td>

                            </tr>

                            <tr className="p-8 border border-pro-100">
                                <th className="pl-8 pt-1 pb-1 border border-pro-100" scope="row">2 años</th>
                                <td className=" text-center border-r  border-pro-100">225-337 gramos/planta/año</td>
                                <td className=" text-center border-r  border-pro-100">225-400 gramos/planta/año</td>

                            </tr>

                            <tr className="p-8 bg-red-100 border hover:bg-red-200  border-pro-100">
                                <th className="pl-8 pt-1 pb-1 border border-pro-100" scope="row">3 años</th>
                                <td className=" text-center border-r  border-pro-100">375-562 gramos/planta/año</td>
                                <td className=" text-center border-r  border-pro-100">375-562 gramos/planta/año</td>

                            </tr>

                            <tr className="p-8 border border-pro-100">
                                <th className="pl-8 pt-1 pb-1 border border-pro-100" scope="row">4 años</th>
                                <td className=" text-center border-r  border-pro-100">375-562 gramos/planta/año</td>
                                <td className=" text-center border-r  border-pro-100">375-562 gramos/planta/año</td>

                            </tr>

                            <tr className="p-8 bg-red-100 hover:bg-red-200 border border-pro-100">
                                <th className="pl-8 pt-1 pb-1 border border-pro-100" scope="row">5 años</th>
                                <td className=" text-center border-r  border-pro-100">375-562 gramos/planta/año</td>
                                <td className=" text-center border-r  border-pro-100">375-562 gramos/planta/año</td>

                            </tr>

                            <tr className="p-8 border border-pro-100">
                                <th className="pl-8 pt-1 pb-1 border border-pro-100" scope="row">6 años en adelante</th>
                                <td className=" text-center border-r  border-pro-100">562 gramos/planta/año</td>
                                <td className=" text-center border-r  border-pro-100">562 gramos/planta/año</td>

                            </tr>

                        </tbody>


                    </table>

                    <p className="pt-8 pb-8">Las dosis que aparecen en la tabla 1. Están por planta/año, estas se debe fraccionar por lo menos en
                        dos aplicaciones en el año, generalmente debe aplicarlas iniciando los periodos de lluvias (Marzo –
                        septiembre), también se puede fraccional en tres partes iguales la dosis recomendada y aplicarla en
                        los periodos de inicio de lluvias. </p>

                    <p className="pb-8">Las distancias para su aplicación serían: para el primer año a los 50 cm del tallo, al segundo año a 80
                        cm de distancia, dentro del tercer y sexto año a 110 cm y a partir del séptimo año a 150 cm del
                        tronco, dividido en dos aplicaciones en el año, en forma circular alrededor de la planta, el fertilizante
                        debe quedar tapado ligeramente con hojarasca o con el suelo. </p>

                </div>	</div>
        </div>
    )
}

export default CursoFertilizantes
