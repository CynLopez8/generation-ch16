package MetPrincipal;

import MenuP.MenuOP;
import MiEjemploJava.Persona;
import MiFecha.Fecha;
import MiSaludo.Saludo;

import java.util.Scanner;

public class Funciones {

            Scanner sc = new Scanner(System.in);

            MenuOP menuOP = new MenuOP();
            menuOP.menu();

            System.out.println("Elija una opción --> : ");

            int op = sc.nextInt();

            switch(op){
                case 1:
                    Saludo s = new Saludo();
                    s.saludar0();
                    s.saludar();
                    System.out.println(s.saludar0());

                    break;

                case 2:
                    Persona p = new Persona ();
                    p.setNombre("Dora");
                    p.setEdad(32);
                    p.setNss(14689);
                    System.out.println("El valor de la variable de instancia p.nombre --> " +p.getNombre());
                    System.out.println("El valor de la variable de instancia p.edad --> " +p.getEdad());
                    System.out.println("El valor de la variable de instancia p.nss --> " +p.getNss());


                    break;
                case 3:
                    Fecha f = new Fecha();
                    f.setDia(24);
                    f.setMes(2);
                    f.setAno(1995);

                    if (f.getMes() < 10) {
                        System.out.println("La fecha es: " + f.getDia() + "/0" + f.getMes() + "/" + f.getAno());
                    } else {
                        System.out.println("La fecha es: " + f.getDia() + "/" + f.getMes() + "/" + f.getAno());

                        System.out.println(f.formaF());
                    }


                    break;
                case 4:
                    System.out.println("Aqui va la actividad del día ");


                    break;

                default:
                    System.out.println("<--- Opción no válida --->");

            }








}
