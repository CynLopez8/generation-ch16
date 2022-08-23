import java.util.Arrays; //Importar las clases del paquete array util
import java.util.Objects;
import java.util.Scanner;

public class Bucles {

    public static void main(String[] args) {
        //let i =1
        // bucle controlado

        for (int i = 5; i <= 10; i++) {
            System.out.println(i);

        }

        //while
        //bucle no controlado --> pueder ir hasta el infitito
        //La condición se debe modificar dentro del while

        //Mientras la condición sea true se ejecuta

        String condicion = ""; //declaracion de la variable a evaluar
        Scanner sc = new Scanner(System.in);

        //Estamos comparando datos primitivos


        while (!Objects.equals(condicion, "Hola")) { //condicion a cumplir: diferente de hola
            System.out.println("Saludame"); //lo que ejecuta si se cumple la condición
            condicion = sc.next(); //Te permite leer la información y asignarlo a una variabble
        }

        //DO WHILE: ES Igual al while, la diferencia es que el do lo ejecuta primero antes de evaluar, ejecuta por lo menos una vez

        do {
            System.out.println("Saludame x2"); //lo que ejecuta si se cumple la condición
            condicion = sc.next();
        } while (!Objects.equals(condicion, "Hola"));
    }
}