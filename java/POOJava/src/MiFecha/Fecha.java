package MiFecha;

public class Fecha {


    //Atributos

    private int dia;
    private int mes;
    private int ano;

    //Constructor

    public Fecha(){}

    //Metodos


    public void setDia(int dia) {
        this.dia = dia;
    }

    public void setMes(int mes) {
        this.mes = mes;
    }


    public void setAno(int ano) {
        this.ano = ano;
    }

    public int getDia() {
        return dia;
    }

    public int getMes() {
        return mes;
    }

    public int getAno() {
        return ano;
    }

    //Para añadir el 0:
    public String formaF(){
        return ""+getDia() + "/" + getMes() + "/" +getAno();
    }
}
