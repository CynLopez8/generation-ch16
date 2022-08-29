package com.cell.herencia;

import java.util.Scanner;

public class BasePadre {
    //atributos
    private static int a;
    private static double b;
    private static String c;

    //constructor
    public static void basePadre(){
        Scanner sc = new Scanner(System.in);
        System.out.println("Ingresa el valor del dato A");
        a = sc.nextInt();

        System.out.println("Ingresa el valor del dato B");
        b = sc.nextInt();

        System.out.println("Ingresa el valor del dato C");
        c = sc.next();

    }



    //metodos:
    public void visualizarA(){
        System.out.println("Objeto H -> Soy un método de la clase BasePadre");
    }

    public void visualizarABC(){

        System.out.println("Soy el metodo visualizarABC");

    }

    //Metodos accesores con get y set

    public int getA() {
        return a;
    }

    public void setA(int a) {
        this.a = a;
    }

    public double getB() {
        return b;
    }

    public void setB(double b) {
        this.b = b;
    }

    public String getC() {
        return c;
    }

    public void setC(String c) {
        this.c = c;
    }
}
