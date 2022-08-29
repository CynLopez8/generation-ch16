package com.cell.principal;

import com.cell.herencia.BasePadre;
import com.cell.herencia.Hija;
import com.cell.herencia.Hijo;

public class EjemploHerencia {
    public static void main(String[] args) {

        /*BasePadre basePadre = new BasePadre();
        basePadre.BasePadre();*/

        Hija h = new Hija();
        h.visualizarA();
        Hijo ho = new Hijo();
        ho.visualizarABC();

        BasePadre obj = new BasePadre();
        obj.setA(2357);

        System.out.println("Atributo de Clase Base Padre -> " + h.getA());


    }
}
