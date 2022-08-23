import java.util.HashSet;
import java.util.Set;

public class Colecciones2 {
    public static void main(String[] args) {
        //SET
        //HashSet
        //No guardan los valores en el orden en que los vas agregando, los añaden como quieren


        Set<String> miSet = new HashSet<>();

        miSet.add("Juan");
        miSet.add("Pedro");
        miSet.add("Luis");
        miSet.add("Felipe");
        miSet.add("Felipe");
        miSet.add("Felipe");
        miSet.add("Felipe");

        System.out.println(miSet);
        System.out.println(miSet.size());
        System.out.println(miSet.contains("Juan"));

        for (String nombre: miSet){
            System.out.println(nombre);
        }

    }
}
