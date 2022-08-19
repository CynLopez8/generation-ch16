import java.util.Arrays;

public class EjemploStrings {
    public static void main(String[] args) {
        String curso = "Curso en Java";
        System.out.println("curso =" +curso);
        String nombre = "Cyn López";
        String resultado = new String ("Curso en Java");
        System.out.println("resultado =" +resultado);

        boolean esigual = curso == resultado; //Aqui comparamos objetos referenciados, uno en una declaración literal y el otro en tipo referencia
        System.out.println("esigual = " + esigual);

        //esigual = curso.equals(resultado);
        esigual = curso.equalsIgnoreCase(resultado); //Aqui comparamos asignacion, lo que dice, la semantica
        System.out.println("esigual = " + esigual);

        // Concatenación:

        String concat = curso + " con " + nombre; //Concatenamos las cadenas de caracteres con asignación directa
        System.out.println("concat = " + concat);
        String dia = "Jueves";
        String concat1 = concat.concat(" ").concat(dia);
        System.out.println("concat1 = " + concat1);

        System.out.println("Hola" + " " + 23); //Lo cinvierte en caracter al 23


    }
}


