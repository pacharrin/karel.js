/* parser generated by jison 0.4.13 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var karelruby = (function(){
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"program":3,"opt_newlines":4,"def_expr_list":5,"EOF":6,"newlines":7,"def":8,"expr":9,"expr_list":10,"NEWLINE":11,"DEF":12,"line":13,"var":14,"END":15,"(":16,")":17,"FORWARD":18,"LEFT":19,"PICKBUZZER":20,"LEAVEBUZZER":21,"HALT":22,"call":23,"repeat":24,"cond":25,"loop":26,"IF":27,"term":28,"ELSE":29,"WHILE":30,"integer":31,"TIMES":32,"non_var_integer":33,"OR":34,"and_term":35,"AND":36,"not_term":37,"NOT":38,"clause":39,"IFZ":40,"bool_fun":41,"IFNFWALL":42,"IFFWALL":43,"IFNLWALL":44,"IFLWALL":45,"IFNRWALL":46,"IFRWALL":47,"IFWBUZZER":48,"IFNWBUZZER":49,"IFBBUZZER":50,"IFNBBUZZER":51,"IFW":52,"IFN":53,"IFE":54,"IFS":55,"IFNW":56,"IFNN":57,"IFNE":58,"IFNS":59,"NUM":60,"INC":61,"DEC":62,"VAR":63,"$accept":0,"$end":1},
terminals_: {2:"error",6:"EOF",11:"NEWLINE",12:"DEF",15:"END",16:"(",17:")",18:"FORWARD",19:"LEFT",20:"PICKBUZZER",21:"LEAVEBUZZER",22:"HALT",27:"IF",29:"ELSE",30:"WHILE",32:"TIMES",34:"OR",36:"AND",38:"NOT",40:"IFZ",42:"IFNFWALL",43:"IFFWALL",44:"IFNLWALL",45:"IFLWALL",46:"IFNRWALL",47:"IFRWALL",48:"IFWBUZZER",49:"IFNWBUZZER",50:"IFBBUZZER",51:"IFNBBUZZER",52:"IFW",53:"IFN",54:"IFE",55:"IFS",56:"IFNW",57:"IFNN",58:"IFNE",59:"IFNS",60:"NUM",61:"INC",62:"DEC",63:"VAR"},
productions_: [0,[3,4],[5,3],[5,3],[5,1],[5,1],[10,3],[10,2],[4,1],[4,0],[7,2],[7,1],[8,6],[8,9],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[25,6],[25,9],[26,6],[23,1],[23,4],[24,6],[24,6],[28,3],[28,1],[35,3],[35,1],[37,2],[37,1],[39,4],[39,1],[39,3],[41,1],[41,1],[41,1],[41,1],[41,1],[41,1],[41,1],[41,1],[41,1],[41,1],[41,1],[41,1],[41,1],[41,1],[41,1],[41,1],[41,1],[41,1],[31,1],[31,1],[33,1],[33,4],[33,4],[14,1],[13,0]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
	var def_list = $$[$0-2][0];
	var expr_list = $$[$0-2][1];
	
    	var program = expr_list.concat([['LINE', yylineno], ['HALT']]);
    	var functions = {};
    	
    	for (var i = 0; i < def_list.length; i++) {
    		if (functions[def_list[i][0]]) {
    			throw "Function redefinition: " + $def_list[i][0];
    		}
    		
    		functions[def_list[i][0]] = program.length;
    		program = program.concat(def_list[i][1]);
    	}
    	
    	for (var i = 0; i < program.length; i++) {
    		if (program[i][0] == 'CALL') {
    			if (!functions[program[i][1]]) {
    				throw "Unknown function: " + program[i][1];
    			}
    			
    			program[i].push(program[i][1]);
    			program[i][1] = functions[program[i][2]];
    		} else if (program[i][0] == 'PARAM' && program[i][1] != 0) {
			throw "Unknown variable: " + program[i][1];
    		}
    	}
    	
    	return program;
    
break;
case 2: this.$ = [$$[$0-2][0].concat($$[$0]), $$[$0-2][1]]; 
break;
case 3: this.$ = [$$[$0-2][0], $$[$0-2][1].concat($$[$0])]; 
break;
case 4: this.$ = [$$[$0], []]; 
break;
case 5: this.$ = [[], $$[$0]]; 
break;
case 6: this.$ = $$[$0-2].concat($$[$0-1]); 
break;
case 7: this.$ = $$[$0-1]; 
break;
case 12: this.$ = [[$$[$0-3], $$[$0-4].concat($$[$0-1]).concat([['RET']])]]; 
break;
case 13:
    	var result = $$[$0-7].concat($$[$0-1]).concat([['RET']]);	
    	for (var i = 0; i < result.length; i++) {
    		if (result[i][0] == 'PARAM') {
    			if (result[i][1] == $$[$0-4]) {
    				result[i][1] = 0;
    			} else {
				throw "Unknown variable: " + $$[$0-4];
    			}
    		}
    	}
    	this.$ = [[$$[$0-6], result]];
    
break;
case 14: this.$ = [['LINE', yylineno], ['WORLDWALLS'], ['ORIENTATION'], ['MASK'], ['AND'], ['NOT'], ['EZ', 'WALL'], ['FORWARD']]; 
break;
case 15: this.$ = [['LINE', yylineno], ['LEFT']]; 
break;
case 16: this.$ = [['LINE', yylineno], ['WORLDBUZZERS'], ['EZ', 'WORLDUNDERFLOW'], ['PICKBUZZER']]; 
break;
case 17: this.$ = [['LINE', yylineno], ['BAGBUZZERS'], ['EZ', 'BAGUNDERFLOW'], ['LEAVEBUZZER']]; 
break;
case 18: this.$ = [['LINE', yylineno], ['HALT']]; 
break;
case 19: this.$ = $$[$0]; 
break;
case 20: this.$ = $$[$0]; 
break;
case 21: this.$ = $$[$0]; 
break;
case 22: this.$ = $$[$0]; 
break;
case 23: this.$ = $$[$0-3].concat($$[$0-4]).concat([['JZ', $$[$0-1].length]]).concat($$[$0-1]); 
break;
case 24: this.$ = $$[$0-6].concat($$[$0-7]).concat([['JZ', 1 + $$[$0-4].length]]).concat($$[$0-4]).concat([['JMP', $$[$0-1].length]]).concat($$[$0-1]); 
break;
case 25: this.$ = $$[$0-3].concat($$[$0-4]).concat([['JZ', 1 + $$[$0-1].length]]).concat($$[$0-1]).concat([['JMP', -1 -($$[$0-3].length + 1 + $$[$0-1].length + 1)]]); 
break;
case 26: this.$ = [['LINE', yylineno], ['LOAD', 0], ['CALL', $$[$0]], ['LINE', yylineno]]; 
break;
case 27: this.$ = [['LINE', yylineno]].concat($$[$0-1]).concat([['CALL', $$[$0-3]], ['LINE', yylineno]]); 
break;
case 28: this.$ = [['PARAM', $$[$0-5]]].concat($$[$0-3]).concat([['DUP'], ['JLEZ', $$[$0-1].length + 2]]).concat($$[$0-1]).concat([['DEC'], ['JMP', -1 -($$[$0-1].length + 4)], ['POP']]); 
break;
case 29: this.$ = $$[$0-5].concat($$[$0-3]).concat([['DUP'], ['JLEZ', $$[$0-1].length + 2]]).concat($$[$0-1]).concat([['DEC'], ['JMP', -1 -($$[$0-1].length + 4)], ['POP']]); 
break;
case 30: this.$ = $$[$0-2].concat($$[$0]).concat([['OR']]); 
break;
case 31: this.$ = $$[$0]; 
break;
case 32: this.$ = $$[$0-2].concat($$[$0]).concat([['AND']]); 
break;
case 33: this.$ = $$[$0]; 
break;
case 34: this.$ = $$[$0].concat([['NOT']]); 
break;
case 35: this.$ = $$[$0]; 
break;
case 36: this.$ = $$[$0-1].concat([['NOT']]); 
break;
case 37: this.$ = $$[$0]; 
break;
case 38: this.$ = $$[$0-1]; 
break;
case 39: this.$ = [['WORLDWALLS'], ['ORIENTATION'], ['MASK'], ['AND'], ['NOT']]; 
break;
case 40: this.$ = [['WORLDWALLS'], ['ORIENTATION'], ['MASK'], ['AND']]; 
break;
case 41: this.$ = [['WORLDWALLS'], ['ORIENTATION'], ['ROTL'], ['MASK'], ['AND'], ['NOT']]; 
break;
case 42: this.$ = [['WORLDWALLS'], ['ORIENTATION'], ['ROTL'], ['MASK'], ['AND']]; 
break;
case 43: this.$ = [['WORLDWALLS'], ['ORIENTATION'], ['ROTR'], ['MASK'], ['AND'], ['NOT']]; 
break;
case 44: this.$ = [['WORLDWALLS'], ['ORIENTATION'], ['ROTR'], ['MASK'], ['AND']]; 
break;
case 45: this.$ = [['WORLDBUZZERS'], ['LOAD', 0], ['EQ'], ['NOT']]; 
break;
case 46: this.$ = [['WORLDBUZZERS'], ['NOT']]; 
break;
case 47: this.$ = [['BAGBUZZERS'], ['LOAD', 0], ['EQ'], ['NOT']]; 
break;
case 48: this.$ = [['BAGBUZZERS'], ['NOT']]; 
break;
case 49: this.$ = [['ORIENTATION'], ['LOAD', 0], ['EQ']]; 
break;
case 50: this.$ = [['ORIENTATION'], ['LOAD', 1], ['EQ']]; 
break;
case 51: this.$ = [['ORIENTATION'], ['LOAD', 2], ['EQ']]; 
break;
case 52: this.$ = [['ORIENTATION'], ['LOAD', 3], ['EQ']]; 
break;
case 53: this.$ = [['ORIENTATION'], ['LOAD', 0], ['EQ'], ['NOT']]; 
break;
case 54: this.$ = [['ORIENTATION'], ['LOAD', 1], ['EQ'], ['NOT']]; 
break;
case 55: this.$ = [['ORIENTATION'], ['LOAD', 2], ['EQ'], ['NOT']]; 
break;
case 56: this.$ = [['ORIENTATION'], ['LOAD', 3], ['EQ'], ['NOT']]; 
break;
case 57: this.$ = [['PARAM', $$[$0]]]; 
break;
case 58: this.$ = $$[$0]; 
break;
case 59: this.$ = [['LOAD', parseInt(yytext)]]; 
break;
case 60: this.$ = $$[$0-1].concat([['INC']]); 
break;
case 61: this.$ = $$[$0-1].concat([['DEC']]); 
break;
case 62: this.$ = yytext; 
break;
case 63: this.$ = [['LINE', yylineno]]; 
break;
}
},
table: [{3:1,4:2,7:3,11:[1,4],12:[2,9],18:[2,9],19:[2,9],20:[2,9],21:[2,9],22:[2,9],27:[2,9],30:[2,9],60:[2,9],61:[2,9],62:[2,9],63:[2,9]},{1:[3]},{5:5,8:6,9:7,12:[1,8],14:18,18:[1,9],19:[1,10],20:[1,11],21:[1,12],22:[1,13],23:14,24:15,25:16,26:17,27:[1,20],30:[1,21],33:19,60:[1,23],61:[1,24],62:[1,25],63:[1,22]},{11:[1,26],12:[2,8],18:[2,8],19:[2,8],20:[2,8],21:[2,8],22:[2,8],27:[2,8],30:[2,8],60:[2,8],61:[2,8],62:[2,8],63:[2,8]},{6:[2,11],11:[2,11],12:[2,11],15:[2,11],18:[2,11],19:[2,11],20:[2,11],21:[2,11],22:[2,11],27:[2,11],29:[2,11],30:[2,11],60:[2,11],61:[2,11],62:[2,11],63:[2,11]},{4:27,6:[2,9],7:28,11:[1,4]},{6:[2,4],11:[2,4]},{6:[2,5],11:[2,5]},{13:29,63:[2,63]},{6:[2,14],11:[2,14]},{6:[2,15],11:[2,15]},{6:[2,16],11:[2,16]},{6:[2,17],11:[2,17]},{6:[2,18],11:[2,18]},{6:[2,19],11:[2,19]},{6:[2,20],11:[2,20]},{6:[2,21],11:[2,21]},{6:[2,22],11:[2,22]},{6:[2,26],11:[2,26],16:[1,30],32:[1,31]},{32:[1,32]},{13:33,16:[2,63],38:[2,63],40:[2,63],42:[2,63],43:[2,63],44:[2,63],45:[2,63],46:[2,63],47:[2,63],48:[2,63],49:[2,63],50:[2,63],51:[2,63],52:[2,63],53:[2,63],54:[2,63],55:[2,63],56:[2,63],57:[2,63],58:[2,63],59:[2,63]},{13:34,16:[2,63],38:[2,63],40:[2,63],42:[2,63],43:[2,63],44:[2,63],45:[2,63],46:[2,63],47:[2,63],48:[2,63],49:[2,63],50:[2,63],51:[2,63],52:[2,63],53:[2,63],54:[2,63],55:[2,63],56:[2,63],57:[2,63],58:[2,63],59:[2,63]},{6:[2,62],11:[2,62],16:[2,62],17:[2,62],32:[2,62]},{17:[2,59],32:[2,59]},{16:[1,35]},{16:[1,36]},{6:[2,10],11:[2,10],12:[2,10],15:[2,10],18:[2,10],19:[2,10],20:[2,10],21:[2,10],22:[2,10],27:[2,10],29:[2,10],30:[2,10],60:[2,10],61:[2,10],62:[2,10],63:[2,10]},{6:[1,37]},{6:[2,8],8:38,9:39,11:[1,26],12:[1,8],14:18,18:[1,9],19:[1,10],20:[1,11],21:[1,12],22:[1,13],23:14,24:15,25:16,26:17,27:[1,20],30:[1,21],33:19,60:[1,23],61:[1,24],62:[1,25],63:[1,22]},{14:40,63:[1,22]},{14:42,31:41,33:43,60:[1,23],61:[1,24],62:[1,25],63:[1,22]},{11:[2,63],13:44},{11:[2,63],13:45},{16:[1,53],28:46,35:47,37:48,38:[1,49],39:50,40:[1,51],41:52,42:[1,54],43:[1,55],44:[1,56],45:[1,57],46:[1,58],47:[1,59],48:[1,60],49:[1,61],50:[1,62],51:[1,63],52:[1,64],53:[1,65],54:[1,66],55:[1,67],56:[1,68],57:[1,69],58:[1,70],59:[1,71]},{16:[1,53],28:72,35:47,37:48,38:[1,49],39:50,40:[1,51],41:52,42:[1,54],43:[1,55],44:[1,56],45:[1,57],46:[1,58],47:[1,59],48:[1,60],49:[1,61],50:[1,62],51:[1,63],52:[1,64],53:[1,65],54:[1,66],55:[1,67],56:[1,68],57:[1,69],58:[1,70],59:[1,71]},{14:42,31:73,33:43,60:[1,23],61:[1,24],62:[1,25],63:[1,22]},{14:42,31:74,33:43,60:[1,23],61:[1,24],62:[1,25],63:[1,22]},{1:[2,1]},{6:[2,2],11:[2,2]},{6:[2,3],11:[2,3]},{7:75,11:[1,4],16:[1,76]},{17:[1,77]},{17:[2,57]},{17:[2,58]},{7:78,11:[1,4]},{7:79,11:[1,4]},{7:80,11:[1,4],34:[1,81]},{11:[2,31],17:[2,31],34:[2,31],36:[1,82]},{11:[2,33],17:[2,33],34:[2,33],36:[2,33]},{16:[1,53],39:83,40:[1,51],41:52,42:[1,54],43:[1,55],44:[1,56],45:[1,57],46:[1,58],47:[1,59],48:[1,60],49:[1,61],50:[1,62],51:[1,63],52:[1,64],53:[1,65],54:[1,66],55:[1,67],56:[1,68],57:[1,69],58:[1,70],59:[1,71]},{11:[2,35],17:[2,35],34:[2,35],36:[2,35]},{16:[1,84]},{11:[2,37],17:[2,37],34:[2,37],36:[2,37]},{16:[1,53],28:85,35:47,37:48,38:[1,49],39:50,40:[1,51],41:52,42:[1,54],43:[1,55],44:[1,56],45:[1,57],46:[1,58],47:[1,59],48:[1,60],49:[1,61],50:[1,62],51:[1,63],52:[1,64],53:[1,65],54:[1,66],55:[1,67],56:[1,68],57:[1,69],58:[1,70],59:[1,71]},{11:[2,39],17:[2,39],34:[2,39],36:[2,39]},{11:[2,40],17:[2,40],34:[2,40],36:[2,40]},{11:[2,41],17:[2,41],34:[2,41],36:[2,41]},{11:[2,42],17:[2,42],34:[2,42],36:[2,42]},{11:[2,43],17:[2,43],34:[2,43],36:[2,43]},{11:[2,44],17:[2,44],34:[2,44],36:[2,44]},{11:[2,45],17:[2,45],34:[2,45],36:[2,45]},{11:[2,46],17:[2,46],34:[2,46],36:[2,46]},{11:[2,47],17:[2,47],34:[2,47],36:[2,47]},{11:[2,48],17:[2,48],34:[2,48],36:[2,48]},{11:[2,49],17:[2,49],34:[2,49],36:[2,49]},{11:[2,50],17:[2,50],34:[2,50],36:[2,50]},{11:[2,51],17:[2,51],34:[2,51],36:[2,51]},{11:[2,52],17:[2,52],34:[2,52],36:[2,52]},{11:[2,53],17:[2,53],34:[2,53],36:[2,53]},{11:[2,54],17:[2,54],34:[2,54],36:[2,54]},{11:[2,55],17:[2,55],34:[2,55],36:[2,55]},{11:[2,56],17:[2,56],34:[2,56],36:[2,56]},{7:86,11:[1,4],34:[1,81]},{17:[1,87]},{17:[1,88]},{9:90,10:89,11:[1,26],14:18,18:[1,9],19:[1,10],20:[1,11],21:[1,12],22:[1,13],23:14,24:15,25:16,26:17,27:[1,20],30:[1,21],33:19,60:[1,23],61:[1,24],62:[1,25],63:[1,22]},{14:91,63:[1,22]},{6:[2,27],11:[2,27]},{9:90,10:92,11:[1,26],14:18,18:[1,9],19:[1,10],20:[1,11],21:[1,12],22:[1,13],23:14,24:15,25:16,26:17,27:[1,20],30:[1,21],33:19,60:[1,23],61:[1,24],62:[1,25],63:[1,22]},{9:90,10:93,11:[1,26],14:18,18:[1,9],19:[1,10],20:[1,11],21:[1,12],22:[1,13],23:14,24:15,25:16,26:17,27:[1,20],30:[1,21],33:19,60:[1,23],61:[1,24],62:[1,25],63:[1,22]},{9:90,10:94,11:[1,26],14:18,18:[1,9],19:[1,10],20:[1,11],21:[1,12],22:[1,13],23:14,24:15,25:16,26:17,27:[1,20],30:[1,21],33:19,60:[1,23],61:[1,24],62:[1,25],63:[1,22]},{16:[1,53],35:95,37:48,38:[1,49],39:50,40:[1,51],41:52,42:[1,54],43:[1,55],44:[1,56],45:[1,57],46:[1,58],47:[1,59],48:[1,60],49:[1,61],50:[1,62],51:[1,63],52:[1,64],53:[1,65],54:[1,66],55:[1,67],56:[1,68],57:[1,69],58:[1,70],59:[1,71]},{16:[1,53],37:96,38:[1,49],39:50,40:[1,51],41:52,42:[1,54],43:[1,55],44:[1,56],45:[1,57],46:[1,58],47:[1,59],48:[1,60],49:[1,61],50:[1,62],51:[1,63],52:[1,64],53:[1,65],54:[1,66],55:[1,67],56:[1,68],57:[1,69],58:[1,70],59:[1,71]},{11:[2,34],17:[2,34],34:[2,34],36:[2,34]},{14:42,31:97,33:43,60:[1,23],61:[1,24],62:[1,25],63:[1,22]},{17:[1,98],34:[1,81]},{9:90,10:99,11:[1,26],14:18,18:[1,9],19:[1,10],20:[1,11],21:[1,12],22:[1,13],23:14,24:15,25:16,26:17,27:[1,20],30:[1,21],33:19,60:[1,23],61:[1,24],62:[1,25],63:[1,22]},{17:[2,60],32:[2,60]},{17:[2,61],32:[2,61]},{9:101,14:18,15:[1,100],18:[1,9],19:[1,10],20:[1,11],21:[1,12],22:[1,13],23:14,24:15,25:16,26:17,27:[1,20],30:[1,21],33:19,60:[1,23],61:[1,24],62:[1,25],63:[1,22]},{7:102,11:[1,4]},{17:[1,103]},{9:101,14:18,15:[1,104],18:[1,9],19:[1,10],20:[1,11],21:[1,12],22:[1,13],23:14,24:15,25:16,26:17,27:[1,20],30:[1,21],33:19,60:[1,23],61:[1,24],62:[1,25],63:[1,22]},{9:101,14:18,15:[1,105],18:[1,9],19:[1,10],20:[1,11],21:[1,12],22:[1,13],23:14,24:15,25:16,26:17,27:[1,20],30:[1,21],33:19,60:[1,23],61:[1,24],62:[1,25],63:[1,22]},{9:101,14:18,15:[1,106],18:[1,9],19:[1,10],20:[1,11],21:[1,12],22:[1,13],23:14,24:15,25:16,26:17,27:[1,20],29:[1,107],30:[1,21],33:19,60:[1,23],61:[1,24],62:[1,25],63:[1,22]},{11:[2,30],17:[2,30],34:[2,30],36:[1,82]},{11:[2,32],17:[2,32],34:[2,32],36:[2,32]},{17:[1,108]},{11:[2,38],17:[2,38],34:[2,38],36:[2,38]},{9:101,14:18,15:[1,109],18:[1,9],19:[1,10],20:[1,11],21:[1,12],22:[1,13],23:14,24:15,25:16,26:17,27:[1,20],30:[1,21],33:19,60:[1,23],61:[1,24],62:[1,25],63:[1,22]},{6:[2,12],11:[2,12]},{7:110,11:[1,4]},{11:[1,26],15:[2,7],18:[2,7],19:[2,7],20:[2,7],21:[2,7],22:[2,7],27:[2,7],29:[2,7],30:[2,7],60:[2,7],61:[2,7],62:[2,7],63:[2,7]},{7:111,11:[1,4]},{6:[2,28],11:[2,28]},{6:[2,29],11:[2,29]},{6:[2,23],11:[2,23]},{7:112,11:[1,4]},{11:[2,36],17:[2,36],34:[2,36],36:[2,36]},{6:[2,25],11:[2,25]},{11:[1,26],15:[2,6],18:[2,6],19:[2,6],20:[2,6],21:[2,6],22:[2,6],27:[2,6],29:[2,6],30:[2,6],60:[2,6],61:[2,6],62:[2,6],63:[2,6]},{9:90,10:113,11:[1,26],14:18,18:[1,9],19:[1,10],20:[1,11],21:[1,12],22:[1,13],23:14,24:15,25:16,26:17,27:[1,20],30:[1,21],33:19,60:[1,23],61:[1,24],62:[1,25],63:[1,22]},{9:90,10:114,11:[1,26],14:18,18:[1,9],19:[1,10],20:[1,11],21:[1,12],22:[1,13],23:14,24:15,25:16,26:17,27:[1,20],30:[1,21],33:19,60:[1,23],61:[1,24],62:[1,25],63:[1,22]},{9:101,14:18,15:[1,115],18:[1,9],19:[1,10],20:[1,11],21:[1,12],22:[1,13],23:14,24:15,25:16,26:17,27:[1,20],30:[1,21],33:19,60:[1,23],61:[1,24],62:[1,25],63:[1,22]},{9:101,14:18,15:[1,116],18:[1,9],19:[1,10],20:[1,11],21:[1,12],22:[1,13],23:14,24:15,25:16,26:17,27:[1,20],30:[1,21],33:19,60:[1,23],61:[1,24],62:[1,25],63:[1,22]},{6:[2,13],11:[2,13]},{6:[2,24],11:[2,24]}],
defaultActions: {37:[2,1],42:[2,57],43:[2,58]},
parseError: function parseError(str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        throw new Error(str);
    }
},
parse: function parse(input) {
    var self = this, stack = [0], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    this.lexer.setInput(input);
    this.lexer.yy = this.yy;
    this.yy.lexer = this.lexer;
    this.yy.parser = this;
    if (typeof this.lexer.yylloc == 'undefined') {
        this.lexer.yylloc = {};
    }
    var yyloc = this.lexer.yylloc;
    lstack.push(yyloc);
    var ranges = this.lexer.options && this.lexer.options.ranges;
    if (typeof this.yy.parseError === 'function') {
        this.parseError = this.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    function lex() {
        var token;
        token = self.lexer.lex() || EOF;
        if (typeof token !== 'number') {
            token = self.symbols_[token] || token;
        }
        return token;
    }
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (this.lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + this.lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: this.lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: this.lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(this.lexer.yytext);
            lstack.push(this.lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = this.lexer.yyleng;
                yytext = this.lexer.yytext;
                yylineno = this.lexer.yylineno;
                yyloc = this.lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                this.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};
/* generated by jison-lex 0.2.1 */
var lexer = (function(){
var lexer = {

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input) {
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len - 1);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function (match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex() {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState() {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules() {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState(n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState(condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {

var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0: return 11; 
break;
case 1:/* ignore */
break;
case 2:/* ignore */
break;
case 3: return 12; 
break;
case 4: return 22; 
break;
case 5: return 19; 
break;
case 6: return 18; 
break;
case 7: return 20; 
break;
case 8: return 21; 
break;
case 9: return 15; 
break;
case 10: return 32; 
break;
case 11: return 30; 
break;
case 12: return 62; 
break;
case 13: return 61; 
break;
case 14: return 40; 
break;
case 15: return 42; 
break;
case 16: return 43; 
break;
case 17: return 44; 
break;
case 18: return 45; 
break;
case 19: return 46; 
break;
case 20: return 47; 
break;
case 21: return 48; 
break;
case 22: return 49; 
break;
case 23: return 50; 
break;
case 24: return 51; 
break;
case 25: return 53; 
break;
case 26: return 55; 
break;
case 27: return 54; 
break;
case 28: return 52; 
break;
case 29: return 57; 
break;
case 30: return 59; 
break;
case 31: return 58; 
break;
case 32: return 56; 
break;
case 33: return 29; 
break;
case 34: return 27; 
break;
case 35: return 38; 
break;
case 36: return 34; 
break;
case 37: return 34; 
break;
case 38: return 36; 
break;
case 39: return 16; 
break;
case 40: return 17; 
break;
case 41: return 60; 
break;
case 42: return 63; 
break;
case 43: return 6; 
break;
}
},
rules: [/^(?:[\n])/,/^(?:\s+)/,/^(?:#[^\n]*)/,/^(?:def\b)/,/^(?:apagate\b)/,/^(?:gira-izquierda\b)/,/^(?:avanza\b)/,/^(?:coge-zumbador\b)/,/^(?:deja-zumbador\b)/,/^(?:fin\b)/,/^(?:veces\b)/,/^(?:mientras\b)/,/^(?:precede\b)/,/^(?:sucede\b)/,/^(?:si-es-cero\b)/,/^(?:frente-libre\b)/,/^(?:frente-bloqueado\b)/,/^(?:izquierda-libre\b)/,/^(?:izquierda-bloqueada\b)/,/^(?:derecha-libre\b)/,/^(?:derecha-bloqueada\b)/,/^(?:junto-a-zumbador\b)/,/^(?:no-junto-a-zumbador\b)/,/^(?:algun-zumbador-en-la-mochila\b)/,/^(?:ningun-zumbador-en-la-mochila\b)/,/^(?:orientado-al-norte\b)/,/^(?:orientado-al-sur\b)/,/^(?:orientado-al-este\b)/,/^(?:orientado-al-oeste\b)/,/^(?:no-orientado-al-norte\b)/,/^(?:no-orientado-al-sur\b)/,/^(?:no-orientado-al-este\b)/,/^(?:no-orientado-al-oeste\b)/,/^(?:sino\b)/,/^(?:si\b)/,/^(?:no\b)/,/^(?:o\b)/,/^(?:u\b)/,/^(?:y\b)/,/^(?:\()/,/^(?:\))/,/^(?:[0-9]+)/,/^(?:[a-zA-Z][a-zA-Z0-9-]*)/,/^(?:$)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43],"inclusive":true}}
};
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = karelruby;
exports.Parser = karelruby.Parser;
exports.parse = function () { return karelruby.parse.apply(karelruby, arguments); };
exports.main = function commonjsMain(args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}
