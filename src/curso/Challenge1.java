package curso;
import javax.swing.*;
import java.util.ArrayList;

public class Challenge1 {

    public static void main(String[] args) {
            String textString = "";
            textString = JOptionPane.showInputDialog("Ingresar cadena de caracter: ");
            if (textString.equals("A")){
                textString = "54";
                System.out.println("Tipo A");
            } else if (textString.equals("B")) {
                textString = "08";
                System.out.println("Tipo B");
            }
            else {
                System.out.println("Cadena de caracter " + textString + " Invalida");
            }

            int[] numbers = new int[8];
            for (int x=0;x<numbers.length;x++){
                numbers[x] = (int) (Math.random()* 10);
                textString = textString + numbers[x];

            }
            System.out.println("Cadena " + textString );

            ArrayList<String> listAnimals = new ArrayList<String>();
            listAnimals.add("Micha");
            listAnimals.add("Margarita");
            listAnimals.add("Tocineta");
            listAnimals.add("Tony");
            listAnimals.add("Piña");
            listAnimals.add("A");
            listAnimals.add("B");

            for (String animals: listAnimals){
                if (textString.equals(animals)== false){
                    textString = "false";
                }else {
                    textString = "true";

                }
                System.out.println(Boolean.parseBoolean(animals));

            }

        }
}
