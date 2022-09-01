package com.cell.j_interface;

public interface Test {
    int CONV = 8;

    void metodo1 (int x);
    String metodo2(String s);
}

class Prueba implements Test, Test1{


    @Override
    public void metodo1(int x) {
        System.out.println("Hola metodo1 parametro X ---> " + x);
    }

    @Override
    public String metodo2(String s) {
        return "Este parámetro es s --> " + s;
    }

    public void metodoPropio(){
        System.out.println("Soy el método propio");
    }

    /*@Override
    public void metodo01(int x) {

    }

    @Override
    public String metodo02(String s) {
        return null;
    }*/

    @Override
    public void metodo01() {
        System.out.println("Hola soy el metodo de Test1 metodo01");

    }

    @Override
    public String metodo02() {
        return "Hola soy el metodo de Test1 metodo02";
    }
}
