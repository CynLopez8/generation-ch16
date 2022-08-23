public class EjemploSaludo {
    public static void main(String[] args) {


        //Declaración: Creamos un objeto de la misma referencia
        Saludo objSaludo;

        //Construcción: Despues le asignamos memoria:
        objSaludo = new Saludo(); //new Saludo() es el metodo constructor

        //Invocación a la clase saludar
        objSaludo.saludar(); //Esta es la instancia: la que lo llama

        //Otra forma de reutilizar la misma clase con diferentes objetos
        Saludo objSaludo0 = new Saludo();

        System.out.println(objSaludo.saludar0());
        System.out.println("Este es otro objeto: -> " + objSaludo0.saludar0());

    }
}
