import java.util.Arrays;

// Arreglos:
//En los arreglos no se pueden mezclar tipos de datos
public class Arreglos {
    public static void main(String[] args) {

        //Definimos un tipo de dato entero y le ponemos [] para indicar que es un arreglo:
        //Además ponemos los datos del arreglo entre {}
        int [] numeroAleatorios = {1, 2, 3, 4, 5, 6};
        String [] valores = {"Hola", "Adios", "etc"};

        // byte otrosNumeros = {1,2,3};
        char [] caracteres = new char [4];
        caracteres[0] = 'h';
        caracteres[1] = 'o';
        caracteres[2] = 'l';
        caracteres[3] = 'a';

        valores [2] = "Valor cambiado";
        System.out.println(numeroAleatorios[2]);
        System.out.println(valores[2]);
        System.out.println(caracteres);

        // for each
        System.out.println("CON FOR EACH");
        for(String elemento: valores){
            System.out.println(elemento);
        }

        for (int numero: numeroAleatorios){
            System.out.println(numero);
        }
    }
}
