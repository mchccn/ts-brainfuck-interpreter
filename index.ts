type PipePipe<A extends boolean, B extends boolean> = A extends true ? true : B extends true ? true : false;

type Split<S extends string> =
    S extends ""
        ? []
        : S extends `${infer First}${infer Rest}`
            ? [First, ...Split<Rest>]
            : [S];

type Increment<X extends number> = [
    1  , 2  , 3  , 4  , 5  , 6  , 7  , 8  , 9  , 10 ,
    11 , 12 , 13 , 14 , 15 , 16 , 17 , 18 , 19 , 20 ,
    21 , 22 , 23 , 24 , 25 , 26 , 27 , 28 , 29 , 30 ,
    31 , 32 , 33 , 34 , 35 , 36 , 37 , 38 , 39 , 40 ,
    41 , 42 , 43 , 44 , 45 , 46 , 47 , 48 , 49 , 50 ,
    51 , 52 , 53 , 54 , 55 , 56 , 57 , 58 , 59 , 60 ,
    61 , 62 , 63 , 64 , 65 , 66 , 67 , 68 , 69 , 70 ,
    71 , 72 , 73 , 74 , 75 , 76 , 77 , 78 , 79 , 80 ,
    81 , 82 , 83 , 84 , 85 , 86 , 87 , 88 , 89 , 90 ,
    91 , 92 , 93 , 94 , 95 , 96 , 97 , 98 , 99 , 100,
    101, 102, 103, 104, 105, 106, 107, 108, 109, 110,
    111, 112, 113, 114, 115, 116, 117, 118, 119, 120,
    121, 122, 123, 124, 125, 126, 127, 128, 129, 130,
    131, 132, 133, 134, 135, 136, 137, 138, 139, 140,
    141, 142, 143, 144, 145, 146, 147, 148, 149, 150,
    151, 152, 153, 154, 155, 156, 157, 158, 159, 160,
    161, 162, 163, 164, 165, 166, 167, 168, 169, 170,
    171, 172, 173, 174, 175, 176, 177, 178, 179, 180,
    181, 182, 183, 184, 185, 186, 187, 188, 189, 190,
    191, 192, 193, 194, 195, 196, 197, 198, 199, 200,
    201, 202, 203, 204, 205, 206, 207, 208, 209, 210,
    211, 212, 213, 214, 215, 216, 217, 218, 219, 220,
    221, 222, 223, 224, 225, 226, 227, 228, 229, 230,
    231, 232, 233, 234, 235, 236, 237, 238, 239, 240,
    241, 242, 243, 244, 245, 246, 247, 248, 249, 250,
    251, 252, 253, 254, 255, 0  ,
][X];

type IncrementNoCap<X extends number> = [
    1  , 2  , 3  , 4  , 5  , 6  , 7  , 8  , 9  , 10 ,
    11 , 12 , 13 , 14 , 15 , 16 , 17 , 18 , 19 , 20 ,
    21 , 22 , 23 , 24 , 25 , 26 , 27 , 28 , 29 , 30 ,
    31 , 32 , 33 , 34 , 35 , 36 , 37 , 38 , 39 , 40 ,
    41 , 42 , 43 , 44 , 45 , 46 , 47 , 48 , 49 , 50 ,
    51 , 52 , 53 , 54 , 55 , 56 , 57 , 58 , 59 , 60 ,
    61 , 62 , 63 , 64 , 65 , 66 , 67 , 68 , 69 , 70 ,
    71 , 72 , 73 , 74 , 75 , 76 , 77 , 78 , 79 , 80 ,
    81 , 82 , 83 , 84 , 85 , 86 , 87 , 88 , 89 , 90 ,
    91 , 92 , 93 , 94 , 95 , 96 , 97 , 98 , 99 , 100,
    101, 102, 103, 104, 105, 106, 107, 108, 109, 110,
    111, 112, 113, 114, 115, 116, 117, 118, 119, 120,
    121, 122, 123, 124, 125, 126, 127, 128, 129, 130,
    131, 132, 133, 134, 135, 136, 137, 138, 139, 140,
    141, 142, 143, 144, 145, 146, 147, 148, 149, 150,
    151, 152, 153, 154, 155, 156, 157, 158, 159, 160,
    161, 162, 163, 164, 165, 166, 167, 168, 169, 170,
    171, 172, 173, 174, 175, 176, 177, 178, 179, 180,
    181, 182, 183, 184, 185, 186, 187, 188, 189, 190,
    191, 192, 193, 194, 195, 196, 197, 198, 199, 200,
    201, 202, 203, 204, 205, 206, 207, 208, 209, 210,
    211, 212, 213, 214, 215, 216, 217, 218, 219, 220,
    221, 222, 223, 224, 225, 226, 227, 228, 229, 230,
    231, 232, 233, 234, 235, 236, 237, 238, 239, 240,
    241, 242, 243, 244, 245, 246, 247, 248, 249, 250,
    251, 252, 253, 254, 255, 256, 257, 258, 259, 260,
    261, 262, 263, 264, 265, 266, 267, 268, 269, 270,
    271, 272, 273, 274, 275, 276, 277, 278, 279, 280,
    281, 282, 283, 284, 285, 286, 287, 288, 289, 290,
][X];

type Decrement<X extends number> = [
    255, 0  , 1  , 2  , 3  , 4  , 5  , 6  , 7  , 8  ,
    9  , 10 , 11 , 12 , 13 , 14 , 15 , 16 , 17 , 18 ,
    19 , 20 , 21 , 22 , 23 , 24 , 25 , 26 , 27 , 28 ,
    29 , 30 , 31 , 32 , 33 , 34 , 35 , 36 , 37 , 38 ,
    39 , 40 , 41 , 42 , 43 , 44 , 45 , 46 , 47 , 48 ,
    49 , 50 , 51 , 52 , 53 , 54 , 55 , 56 , 57 , 58 ,
    59 , 60 , 61 , 62 , 63 , 64 , 65 , 66 , 67 , 68 ,
    69 , 70 , 71 , 72 , 73 , 74 , 75 , 76 , 77 , 78 ,
    79 , 80 , 81 , 82 , 83 , 84 , 85 , 86 , 87 , 88 ,
    89 , 90 , 91 , 92 , 93 , 94 , 95 , 96 , 97 , 98 ,
    99 , 100, 101, 102, 103, 104, 105, 106, 107, 108,
    109, 110, 111, 112, 113, 114, 115, 116, 117, 118,
    119, 120, 121, 122, 123, 124, 125, 126, 127, 128,
    129, 130, 131, 132, 133, 134, 135, 136, 137, 138,
    139, 140, 141, 142, 143, 144, 145, 146, 147, 148,
    149, 150, 151, 152, 153, 154, 155, 156, 157, 158,
    159, 160, 161, 162, 163, 164, 165, 166, 167, 168,
    169, 170, 171, 172, 173, 174, 175, 176, 177, 178,
    179, 180, 181, 182, 183, 184, 185, 186, 187, 188,
    189, 190, 191, 192, 193, 194, 195, 196, 197, 198,
    199, 200, 201, 202, 203, 204, 205, 206, 207, 208,
    209, 210, 211, 212, 213, 214, 215, 216, 217, 218,
    219, 220, 221, 222, 223, 224, 225, 226, 227, 228,
    229, 230, 231, 232, 233, 234, 235, 236, 237, 238,
    239, 240, 241, 242, 243, 244, 245, 246, 247, 248,
    249, 250, 251, 252, 253, 254,
][X];

type DecrementNoCap<X extends number> = [
    -1 , 0  , 1  , 2  , 3  , 4  , 5  , 6  , 7  , 8  ,
    9  , 10 , 11 , 12 , 13 , 14 , 15 , 16 , 17 , 18 ,
    19 , 20 , 21 , 22 , 23 , 24 , 25 , 26 , 27 , 28 ,
    29 , 30 , 31 , 32 , 33 , 34 , 35 , 36 , 37 , 38 ,
    39 , 40 , 41 , 42 , 43 , 44 , 45 , 46 , 47 , 48 ,
    49 , 50 , 51 , 52 , 53 , 54 , 55 , 56 , 57 , 58 ,
    59 , 60 , 61 , 62 , 63 , 64 , 65 , 66 , 67 , 68 ,
    69 , 70 , 71 , 72 , 73 , 74 , 75 , 76 , 77 , 78 ,
    79 , 80 , 81 , 82 , 83 , 84 , 85 , 86 , 87 , 88 ,
    89 , 90 , 91 , 92 , 93 , 94 , 95 , 96 , 97 , 98 ,
    99 , 100, 101, 102, 103, 104, 105, 106, 107, 108,
    109, 110, 111, 112, 113, 114, 115, 116, 117, 118,
    119, 120, 121, 122, 123, 124, 125, 126, 127, 128,
    129, 130, 131, 132, 133, 134, 135, 136, 137, 138,
    139, 140, 141, 142, 143, 144, 145, 146, 147, 148,
    149, 150, 151, 152, 153, 154, 155, 156, 157, 158,
    159, 160, 161, 162, 163, 164, 165, 166, 167, 168,
    169, 170, 171, 172, 173, 174, 175, 176, 177, 178,
    179, 180, 181, 182, 183, 184, 185, 186, 187, 188,
    189, 190, 191, 192, 193, 194, 195, 196, 197, 198,
    199, 200, 201, 202, 203, 204, 205, 206, 207, 208,
    209, 210, 211, 212, 213, 214, 215, 216, 217, 218,
    219, 220, 221, 222, 223, 224, 225, 226, 227, 228,
    229, 230, 231, 232, 233, 234, 235, 236, 237, 238,
    239, 240, 241, 242, 243, 244, 245, 246, 247, 248,
    249, 250, 251, 252, 253, 254, 255, 256, 257, 258,
    259, 260, 261, 262, 263, 264, 265, 266, 267, 268,
    269, 270, 271, 272, 273, 274, 275, 276, 277, 278,
    279, 280, 281, 282, 283, 284, 285, 286, 287, 288,
][X];

type OmitKeysThatDontMatchEntry<
  StringRecord extends Record<string, string>,
  Entry extends string,
> = {
  [Key in keyof StringRecord]: StringRecord[Key] extends Entry ? Key : never;
}

type FindKey<
  StringRecord extends Record<string, string>,
  Entry extends string,
> = OmitKeysThatDontMatchEntry<StringRecord, Entry>[keyof OmitKeysThatDontMatchEntry<StringRecord, Entry>];

type InvertRecord<StringRecord extends Record<string, string>> = {
  [Entry in StringRecord[keyof StringRecord]]: FindKey<StringRecord, Entry>;
};

type FromCharCode = [
    "\u0000", "\u0001", "\u0002", "\u0003", "\u0004", "\u0005", "\u0006", "\u0007", "\b"    , "\t"    , "\n"    , "\u000b", "\f"    , "\r"    , "\u000e", "\u000f", 
    "\u0010", "\u0011", "\u0012", "\u0013", "\u0014", "\u0015", "\u0016", "\u0017", "\u0018", "\u0019", "\u001a", "\u001b", "\u001c", "\u001d", "\u001e", "\u001f", 
    " "     , "!"     , "\""    , "#"     , "$"     , "%"     , "&"     , "'"     , "("     , ")"     , "*"     , "+"     , ","     , "-"     , "."     , "/"     ,
    "0"     , "1"     , "2"     , "3"     , "4"     , "5"     , "6"     , "7"     , "8"     , "9"     , ":"     , ";"     , "<"     , "="     , ">"     , "?"     ,
    "@"     , "A"     , "B"     , "C"     , "D"     , "E"     , "F"     , "G"     , "H"     , "I"     , "J"     , "K"     , "L"     , "M"     , "N"     , "O"     ,
    "P"     , "Q"     , "R"     , "S"     , "T"     , "U"     , "V"     , "W"     , "X"     , "Y"     , "Z"     , "["     , "\\"    , "]"     , "^"     , "_"     ,
    "`"     , "a"     , "b"     , "c"     , "d"     , "e"     , "f"     , "g"     , "h"     , "i"     , "j"     , "k"     , "l"     , "m"     , "n"     , "o"     ,
    "p"     , "q"     , "r"     , "s"     , "t"     , "u"     , "v"     , "w"     , "x"     , "y"     , "z"     , "{"     , "|"     , "}"     , "~"     ,"\u007f" ,
    "\u0080", "\u0081", "\u0082", "\u0083", "\u0084", "\u0085", "\u0086", "\u0087", "\u0088", "\u0089", "\u008a", "\u008b", "\u008c", "\u008d", "\u008e", "\u008f",
    "\u0090", "\u0091", "\u0092", "\u0093", "\u0094", "\u0095", "\u0096", "\u0097", "\u0098", "\u0099", "\u009a", "\u009b", "\u009c", "\u009d", "\u009e", "\u009f",
    ""     , " "     , "¡"     , "¢"     , "£"     , "¤"     , "¥"     , "¦"     , "§"     , "¨"     , "©"     , "ª"     , "«"     , "¬"     , "­"      , "®"     ,
    "¯"     , "°"     , "±"     , "²"     , "³"     , "´"     , "µ"     , "¶"     , "·"     , "¸"     , "¹"     , "º"     , "»"     , "¼"     , "½"     , "¾"     ,
    "¿"     , "À"     , "Á"     , "Â"     , "Ã"     , "Ä"     , "Å"     , "Æ"     , "Ç"     , "È"     , "É"     , "Ê"     , "Ë"     , "Ì"     , "Í"     , "Î"     ,
    "Ï"     , "Ð"     , "Ñ"     , "Ò"     , "Ó"     , "Ô"     , "Õ"     , "Ö"     , "×"     , "Ø"     , "Ù"     , "Ú"     , "Û"     , "Ü"     , "Ý"     , "Þ"     ,
    "ß"     , "à"     , "á"     , "â"     , "ã"     , "ä"     , "å"     , "æ"     , "ç"     , "è"     , "é"     , "ê"     , "ë"     , "ì"     , "í"     , "î"     ,
    "ï"     , "ð"     , "ñ"     , "ò"     , "ó"     , "ô"     , "õ"     , "ö"     , "÷"     , "ø"     , "ù"     , "ú"     , "û"     , "ü"     , "ý"     , "\u0100",
];

type ToCharCode = InvertRecord<Pick<FromCharCode, Exclude<keyof FromCharCode, keyof []>>>;

type ToNumber = [
    0  , 1  , 2  , 3  , 4  , 5  , 6  , 7  , 8  , 9  , 10 , 11 , 12 , 13 , 14 , 15 , 
    16 , 17 , 18 , 19 , 20 , 21 , 22 , 23 , 24 , 25 , 26 , 27 , 28 , 29 , 30 , 31 , 
    32 , 33 , 34 , 35 , 36 , 37 , 38 , 39 , 40 , 41 , 42 , 43 , 44 , 45 , 46 , 47 , 
    48 , 49 , 50 , 51 , 52 , 53 , 54 , 55 , 56 , 57 , 58 , 59 , 60 , 61 , 62 , 63 , 
    64 , 65 , 66 , 67 , 68 , 69 , 70 , 71 , 72 , 73 , 74 , 75 , 76 , 77 , 78 , 79 , 
    80 , 81 , 82 , 83 , 84 , 85 , 86 , 87 , 88 , 89 , 90 , 91 , 92 , 93 , 94 , 95 , 
    96 , 97 , 98 , 99 , 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 
    112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 
    128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 
    144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 
    160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 
    176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 
    192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 
    208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 
    224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 
    240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255,
];

type Byte = 
    | 0   | 1   | 2   | 3   | 4   | 5   | 6   | 7   | 8   | 9   | 10  | 11  | 12  | 13  | 14  | 15 
    | 16  | 17  | 18  | 19  | 20  | 21  | 22  | 23  | 24  | 25  | 26  | 27  | 28  | 29  | 30  | 31  
    | 32  | 33  | 34  | 35  | 36  | 37  | 38  | 39  | 40  | 41  | 42  | 43  | 44  | 45  | 46  | 47  
    | 48  | 49  | 50  | 51  | 52  | 53  | 54  | 55  | 56  | 57  | 58  | 59  | 60  | 61  | 62  | 63  
    | 64  | 65  | 66  | 67  | 68  | 69  | 70  | 71  | 72  | 73  | 74  | 75  | 76  | 77  | 78  | 79  
    | 80  | 81  | 82  | 83  | 84  | 85  | 86  | 87  | 88  | 89  | 90  | 91  | 92  | 93  | 94  | 95  
    | 96  | 97  | 98  | 99  | 100 | 101 | 102 | 103 | 104 | 105 | 106 | 107 | 108 | 109 | 110 | 111 
    | 112 | 113 | 114 | 115 | 116 | 117 | 118 | 119 | 120 | 121 | 122 | 123 | 124 | 125 | 126 | 127 
    | 128 | 129 | 130 | 131 | 132 | 133 | 134 | 135 | 136 | 137 | 138 | 139 | 140 | 141 | 142 | 143 
    | 144 | 145 | 146 | 147 | 148 | 149 | 150 | 151 | 152 | 153 | 154 | 155 | 156 | 157 | 158 | 159 
    | 160 | 161 | 162 | 163 | 164 | 165 | 166 | 167 | 168 | 169 | 170 | 171 | 172 | 173 | 174 | 175 
    | 176 | 177 | 178 | 179 | 180 | 181 | 182 | 183 | 184 | 185 | 186 | 187 | 188 | 189 | 190 | 191 
    | 192 | 193 | 194 | 195 | 196 | 197 | 198 | 199 | 200 | 201 | 202 | 203 | 204 | 205 | 206 | 207 
    | 208 | 209 | 210 | 211 | 212 | 213 | 214 | 215 | 216 | 217 | 218 | 219 | 220 | 221 | 222 | 223 
    | 224 | 225 | 226 | 227 | 228 | 229 | 230 | 231 | 232 | 233 | 234 | 235 | 236 | 237 | 238 | 239 
    | 240 | 241 | 242 | 243 | 244 | 245 | 246 | 247 | 248 | 249 | 250 | 251 | 252 | 253 | 254 | 255;

type Instruction = ">" | "<" | "+" | "-" | "[" | "]" | "." | ",";

type Fill<
    L extends number        , 
    E extends Byte          , 
    A extends Byte[] = []   , 
    I extends number = 0    ,
> = I extends L
    ? A
    : Fill<L, E, [...A, E], IncrementNoCap<I>>;

type MapTupleToUnknown<T extends unknown[]> = { [K in keyof T]: unknown; };

type Overlay<A extends unknown[], B extends unknown[]> =
    A extends [...MapTupleToUnknown<B>, ...infer Rest]
        ? [...B, ...Rest] 
        : B;

type WriteMemoryHelper<
    Memory extends Byte[],
    Target extends number,
    Index  extends number,
    Data   extends Byte  ,
> = Index extends Target ? Data : Memory[Index]

type WriteMemoryInternal<
    Memory extends Byte[]         ,
    Target extends number         ,
    Data   extends Byte           ,
    Index  extends number = 0     ,
    Source extends Byte[] = Memory,
> = Memory extends [Byte, ...infer Rest]
        ? [WriteMemoryHelper<Source, Target, Index, Data>, ...WriteMemoryInternal<Rest, Target, Data, IncrementNoCap<Index>, Source>]
        : [];

type WriteMemory<
    Memory extends Byte[],
    Target extends number,
    Data   extends Byte  ,
> = WriteMemoryInternal<Overlay<Fill<IncrementNoCap<Target>, 0>, Memory>, Target, Data>;

type IncrementMemoryHelper<
    Memory extends Byte[],
    Target extends number,
    Index  extends number,
> = Index extends Target
    ? Increment<Memory[Index]>
    : Memory[Index]

type IncrementMemoryInternal<
    Memory extends Byte[]         ,
    Target extends number         ,
    Index  extends number = 0     ,
    Source extends Byte[] = Memory,
> = Memory extends [Byte, ...infer Rest]
        ? [IncrementMemoryHelper<Source, Target, Index>, ...IncrementMemoryInternal<Rest, Target, IncrementNoCap<Index>, Source>]
        : [];

type IncrementMemory<
    Memory extends Byte[],
    Target extends number,
> = IncrementMemoryInternal<Overlay<Fill<IncrementNoCap<Target>, 0>, Memory>, Target>;

type DecrementMemoryHelper<
    Memory extends Byte[],
    Target extends number,
    Index  extends number,
> = Index extends Target
    ? Decrement<Memory[Index]>
    : Memory[Index]

type DecrementMemoryInternal<
    Memory extends Byte[]         ,
    Target extends number         ,
    Index  extends number = 0     ,
    Source extends Byte[] = Memory,
> = Memory extends [Byte, ...infer Rest]
        ? [DecrementMemoryHelper<Source, Target, Index>, ...DecrementMemoryInternal<Rest, Target, IncrementNoCap<Index>, Source>]
        : [];

type DecrementMemory<
    Memory extends Byte[],
    Target extends number,
> = DecrementMemoryInternal<Overlay<Fill<IncrementNoCap<Target>, 0>, Memory>, Target>

type OpeningBracket<
    Code extends string[] ,
    Index extends number  ,
    Counter extends number,
> = PipePipe<Counter extends 0 ? true : false, Code[Index] extends "]" ? false : true> extends true
    ? Code[Index] extends "["
        ? OpeningBracket<Code, IncrementNoCap<Index>, IncrementNoCap<Counter>>
        : Code[Index] extends "]"
            ? DecrementNoCap<Index> extends -1 | undefined
                ? "unmatched bracket"
                : OpeningBracket<Code, IncrementNoCap<Index>, DecrementNoCap<Counter>>
            : OpeningBracket<Code, IncrementNoCap<Index>, Counter>
    : [Index, Counter];

type ClosingBracket<
    Code extends string[] ,
    Index extends number  ,
    Counter extends number,
> = PipePipe<Counter extends 0 ? false : true, Code[Index] extends "[" ? false : true> extends true
    ? Code[Index] extends "]"
        ? ClosingBracket<Code, DecrementNoCap<Index>, IncrementNoCap<Counter>>
        : Code[Index] extends "["
            ? DecrementNoCap<Index> extends -1 | undefined
                ? "unmatched bracket"
                : ClosingBracket<Code, DecrementNoCap<Index>, DecrementNoCap<Counter>>
            : ClosingBracket<Code, DecrementNoCap<Index>, Counter>
    : [Decrement<Index>, Counter];

type InterpretInternal<
    Code    extends string[]   ,
    Input   extends string = "",
    Output  extends string = "",
    Memory  extends Byte[] = [],
    Pointer extends number = 0 ,
    Index   extends number = 0 ,
    Counter extends number = 0 ,
> = DecrementNoCap<Counter> extends undefined
    ? "unmatched bracket"
    : Code[255] extends string
        ? "code is too long"
        : Code[Index] extends infer Char 
            ? Char extends undefined
                ? Output
                : Char extends Instruction
                    ? Char extends ">"
                        ? InterpretInternal<Code, Input, Output, Memory, IncrementNoCap<Pointer>, IncrementNoCap<Index>, Counter>
                        : Char extends "<"
                            ? InterpretInternal<Code, Input, Output, Memory, Decrement<Pointer>, IncrementNoCap<Index>, Counter>
                            : Char extends "+"
                                ? InterpretInternal<Code, Input, Output, IncrementMemory<Memory, Pointer>, Pointer, IncrementNoCap<Index>, Counter>
                                : Char extends "-"
                                    ? InterpretInternal<Code, Input, Output, DecrementMemory<Memory, Pointer>, Pointer, IncrementNoCap<Index>, Counter>
                                    : Char extends "."
                                        ? InterpretInternal<Code, Input, `${Output}${FromCharCode[Memory[Pointer]]}`, Memory, Pointer, IncrementNoCap<Index>, Counter>
                                        : Char extends ","
                                            ? Input extends `${infer In}${infer Rest}`
                                                ? InterpretInternal<Code, Rest, Output, WriteMemory<Memory, Pointer, ToNumber[ToCharCode[In & keyof ToCharCode]]>, Pointer, IncrementNoCap<Index>, Counter>
                                                : Char extends "["
                                                    ? Memory[Pointer] extends 0
                                                        ? OpeningBracket<Code, Index, Counter> extends string
                                                            ? OpeningBracket<Code, Index, Counter>
                                                            : OpeningBracket<Code, Index, Counter> extends [infer I, infer C]
                                                                ? InterpretInternal<Code, Input, Output, Memory, Pointer, I, C>
                                                                : never
                                                        : InterpretInternal<Code, Input, Output, Memory, Pointer, IncrementNoCap<IncrementNoCap<Index>>, Counter>
                                                    : Char extends "]"
                                                        ? Memory[Pointer] extends 0
                                                            ? InterpretInternal<Code, Input, Output, Memory, Pointer, Index, Counter>
                                                            : ClosingBracket<Code, Index, Counter> extends string 
                                                                ? ClosingBracket<Code, Index, Counter>
                                                                : ClosingBracket<Code, Index, Counter> extends [infer I, infer C]
                                                                    ? InterpretInternal<Code, Input, Output, Memory, Pointer, I, C>
                                                                    : never
                                                        : never
                                            : InterpretInternal<Code, "", Output, Memory, Pointer, IncrementNoCap<Index>, Counter>
                    : InterpretInternal<Code, Input, Output, Memory, Pointer, IncrementNoCap<Index>, Counter>
            : never;

type Interpret<
    Code extends string      ,
    Input extends string = "",
> = InterpretInternal<Split<Code>, Input>;
