package com.cell.principal;

import com.cell.herencia.BasePadre;
import com.cell.herencia.Hija;
import com.cell.herencia.Hijo;

import java.util.ArrayList;

public class EjemploHerencia {
    public static void main(String[] args) {

        /*BasePadre basePadre = new BasePadre();
        basePadre.BasePadre();*/

        Hija h = new Hija();
        h.visualizarA();
        Hijo ho = new Hijo();
        ho.setA(14689);
        ho.visualizarABC();

        BasePadre objB = new BasePadre();
        objB.setA(2357);

        Object miObj = new BasePadre();



        System.out.println("Atributo de Clase Base Padre -> " + objB.getA());
        System.out.println("Atributo de Clase Hijo " + ho.getA());

    }
}
