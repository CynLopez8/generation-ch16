package com.cell.h_abstracta;

public class Circulo extends FigurasGeometricas {

    public Circulo(){

    }
    private float radio;

    @Override
    public float area() {
        return (float) (Math.PI * Math.pow(radio,2));
    }
    public Circulo(float radio){
        this.radio=radio;
    }

    public double getRadio() {
        return radio;
    }

    public void setRadio(float radio) {
        this.radio = radio;
    }
}
