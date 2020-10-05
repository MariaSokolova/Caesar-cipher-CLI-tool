### Caesar-cipher-CLI-tool

This is a command line application. It encrypts and decrypts with Caesar's cipher  only letters of the Latin alphabet. All other characters, numbers and symbols remain unchanged

### How to use
Enter the following into the command line: 'node caesar-cipher [options]', where options are command line parameters (short alias and full name)


-s, --shift: a shift;

-i, --input: an input file;

-o, --output: an output file;

-a, --action: an action encode/decode;

The 'shift' option should be positive integer

The 'action' can take the value of 'encode' or 'decode'

If 'input' and/or 'output' options are absent, then reading and writing well be carried out from/to the command line 

### Example of usage:

$node caesar-cipher -s 1 -a encode -i input.txt -o output.txt

Before:

>input.txt

>'Hello 123 !! Привет'

After:
>output.txt

>'Ifmmp 123 !! Привет'
