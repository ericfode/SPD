// Compiled by ClojureScript 0.0-2234
goog.provide('cljs.reader');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.string');
cljs.reader.PushbackReader = (function (){var obj26099 = {};return obj26099;
})();
cljs.reader.read_char = (function read_char(reader){if((function (){var and__8650__auto__ = reader;if(and__8650__auto__)
{return reader.cljs$reader$PushbackReader$read_char$arity$1;
} else
{return and__8650__auto__;
}
})())
{return reader.cljs$reader$PushbackReader$read_char$arity$1(reader);
} else
{var x__9289__auto__ = (((reader == null))?null:reader);return (function (){var or__8662__auto__ = (cljs.reader.read_char[goog.typeOf(x__9289__auto__)]);if(or__8662__auto__)
{return or__8662__auto__;
} else
{var or__8662__auto____$1 = (cljs.reader.read_char["_"]);if(or__8662__auto____$1)
{return or__8662__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"PushbackReader.read-char",reader);
}
}
})().call(null,reader);
}
});
cljs.reader.unread = (function unread(reader,ch){if((function (){var and__8650__auto__ = reader;if(and__8650__auto__)
{return reader.cljs$reader$PushbackReader$unread$arity$2;
} else
{return and__8650__auto__;
}
})())
{return reader.cljs$reader$PushbackReader$unread$arity$2(reader,ch);
} else
{var x__9289__auto__ = (((reader == null))?null:reader);return (function (){var or__8662__auto__ = (cljs.reader.unread[goog.typeOf(x__9289__auto__)]);if(or__8662__auto__)
{return or__8662__auto__;
} else
{var or__8662__auto____$1 = (cljs.reader.unread["_"]);if(or__8662__auto____$1)
{return or__8662__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"PushbackReader.unread",reader);
}
}
})().call(null,reader,ch);
}
});

/**
* @constructor
*/
cljs.reader.StringPushbackReader = (function (s,buffer,idx){
this.s = s;
this.buffer = buffer;
this.idx = idx;
})
cljs.reader.StringPushbackReader.cljs$lang$type = true;
cljs.reader.StringPushbackReader.cljs$lang$ctorStr = "cljs.reader/StringPushbackReader";
cljs.reader.StringPushbackReader.cljs$lang$ctorPrWriter = (function (this__9229__auto__,writer__9230__auto__,opt__9231__auto__){return cljs.core._write.call(null,writer__9230__auto__,"cljs.reader/StringPushbackReader");
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$ = true;
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$read_char$arity$1 = (function (reader){var self__ = this;
var reader__$1 = this;if((self__.buffer.length === 0))
{self__.idx = (self__.idx + 1);
return (self__.s[self__.idx]);
} else
{return self__.buffer.pop();
}
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$unread$arity$2 = (function (reader,ch){var self__ = this;
var reader__$1 = this;return self__.buffer.push(ch);
});
cljs.reader.__GT_StringPushbackReader = (function __GT_StringPushbackReader(s,buffer,idx){return (new cljs.reader.StringPushbackReader(s,buffer,idx));
});
cljs.reader.push_back_reader = (function push_back_reader(s){return (new cljs.reader.StringPushbackReader(s,[],-1));
});
/**
* Checks whether a given character is whitespace
*/
cljs.reader.whitespace_QMARK_ = (function whitespace_QMARK_(ch){var or__8662__auto__ = goog.string.isBreakingWhitespace(ch);if(cljs.core.truth_(or__8662__auto__))
{return or__8662__auto__;
} else
{return ("," === ch);
}
});
/**
* Checks whether a given character is numeric
*/
cljs.reader.numeric_QMARK_ = (function numeric_QMARK_(ch){return goog.string.isNumeric(ch);
});
/**
* Checks whether the character begins a comment.
*/
cljs.reader.comment_prefix_QMARK_ = (function comment_prefix_QMARK_(ch){return (";" === ch);
});
/**
* Checks whether the reader is at the start of a number literal
*/
cljs.reader.number_literal_QMARK_ = (function number_literal_QMARK_(reader,initch){return (cljs.reader.numeric_QMARK_.call(null,initch)) || (((("+" === initch)) || (("-" === initch))) && (cljs.reader.numeric_QMARK_.call(null,(function (){var next_ch = cljs.reader.read_char.call(null,reader);cljs.reader.unread.call(null,reader,next_ch);
return next_ch;
})())));
});
/**
* @param {...*} var_args
*/
cljs.reader.reader_error = (function() { 
var reader_error__delegate = function (rdr,msg){throw (new Error(cljs.core.apply.call(null,cljs.core.str,msg)));
};
var reader_error = function (rdr,var_args){
var msg = null;if (arguments.length > 1) {
  msg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return reader_error__delegate.call(this,rdr,msg);};
reader_error.cljs$lang$maxFixedArity = 1;
reader_error.cljs$lang$applyTo = (function (arglist__26100){
var rdr = cljs.core.first(arglist__26100);
var msg = cljs.core.rest(arglist__26100);
return reader_error__delegate(rdr,msg);
});
reader_error.cljs$core$IFn$_invoke$arity$variadic = reader_error__delegate;
return reader_error;
})()
;
cljs.reader.macro_terminating_QMARK_ = (function macro_terminating_QMARK_(ch){var and__8650__auto__ = !((ch === "#"));if(and__8650__auto__)
{var and__8650__auto____$1 = !((ch === "'"));if(and__8650__auto____$1)
{var and__8650__auto____$2 = !((ch === ":"));if(and__8650__auto____$2)
{return cljs.reader.macros.call(null,ch);
} else
{return and__8650__auto____$2;
}
} else
{return and__8650__auto____$1;
}
} else
{return and__8650__auto__;
}
});
cljs.reader.read_token = (function read_token(rdr,initch){var sb = (new goog.string.StringBuffer(initch));var ch = cljs.reader.read_char.call(null,rdr);while(true){
if(((ch == null)) || (cljs.reader.whitespace_QMARK_.call(null,ch)) || (cljs.reader.macro_terminating_QMARK_.call(null,ch)))
{cljs.reader.unread.call(null,rdr,ch);
return sb.toString();
} else
{{
var G__26101 = (function (){sb.append(ch);
return sb;
})();
var G__26102 = cljs.reader.read_char.call(null,rdr);
sb = G__26101;
ch = G__26102;
continue;
}
}
break;
}
});
/**
* Advances the reader to the end of a line. Returns the reader
*/
cljs.reader.skip_line = (function skip_line(reader,_){while(true){
var ch = cljs.reader.read_char.call(null,reader);if(((ch === "\n")) || ((ch === "\r")) || ((ch == null)))
{return reader;
} else
{{
continue;
}
}
break;
}
});
cljs.reader.int_pattern = cljs.core.re_pattern.call(null,"^([-+]?)(?:(0)|([1-9][0-9]*)|0[xX]([0-9A-Fa-f]+)|0([0-7]+)|([1-9][0-9]?)[rR]([0-9A-Za-z]+))(N)?$");
cljs.reader.ratio_pattern = cljs.core.re_pattern.call(null,"^([-+]?[0-9]+)/([0-9]+)$");
cljs.reader.float_pattern = cljs.core.re_pattern.call(null,"^([-+]?[0-9]+(\\.[0-9]*)?([eE][-+]?[0-9]+)?)(M)?$");
cljs.reader.symbol_pattern = cljs.core.re_pattern.call(null,"^[:]?([^0-9/].*/)?([^0-9/][^/]*)$");
cljs.reader.re_matches_STAR_ = (function re_matches_STAR_(re,s){var matches = re.exec(s);if((!((matches == null))) && (((matches[0]) === s)))
{if((matches.length === 1))
{return (matches[0]);
} else
{return matches;
}
} else
{return null;
}
});
cljs.reader.match_int = (function match_int(s){var groups = cljs.reader.re_matches_STAR_.call(null,cljs.reader.int_pattern,s);var zero = (groups[2]);if(!((zero == null)))
{return 0;
} else
{var a = (cljs.core.truth_((groups[3]))?[(groups[3]),10]:(cljs.core.truth_((groups[4]))?[(groups[4]),16]:(cljs.core.truth_((groups[5]))?[(groups[5]),8]:(cljs.core.truth_((groups[6]))?[(groups[7]),parseInt((groups[6]),10)]:((new cljs.core.Keyword(null,"else","else",1017020587))?[null,null]:null)))));var n = (a[0]);var radix = (a[1]);if((n == null))
{return null;
} else
{var parsed = parseInt(n,radix);if(("-" === (groups[1])))
{return (- parsed);
} else
{return parsed;
}
}
}
});
cljs.reader.match_ratio = (function match_ratio(s){var groups = cljs.reader.re_matches_STAR_.call(null,cljs.reader.ratio_pattern,s);var numinator = (groups[1]);var denominator = (groups[2]);return (parseInt(numinator,10) / parseInt(denominator,10));
});
cljs.reader.match_float = (function match_float(s){return parseFloat(s);
});
cljs.reader.match_number = (function match_number(s){if(cljs.core.truth_(cljs.reader.re_matches_STAR_.call(null,cljs.reader.int_pattern,s)))
{return cljs.reader.match_int.call(null,s);
} else
{if(cljs.core.truth_(cljs.reader.re_matches_STAR_.call(null,cljs.reader.ratio_pattern,s)))
{return cljs.reader.match_ratio.call(null,s);
} else
{if(cljs.core.truth_(cljs.reader.re_matches_STAR_.call(null,cljs.reader.float_pattern,s)))
{return cljs.reader.match_float.call(null,s);
} else
{return null;
}
}
}
});
cljs.reader.escape_char_map = (function escape_char_map(c){if((c === "t"))
{return "\t";
} else
{if((c === "r"))
{return "\r";
} else
{if((c === "n"))
{return "\n";
} else
{if((c === "\\"))
{return "\\";
} else
{if((c === "\""))
{return "\"";
} else
{if((c === "b"))
{return "\b";
} else
{if((c === "f"))
{return "\f";
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return null;
} else
{return null;
}
}
}
}
}
}
}
}
});
cljs.reader.read_2_chars = (function read_2_chars(reader){return (new goog.string.StringBuffer(cljs.reader.read_char.call(null,reader),cljs.reader.read_char.call(null,reader))).toString();
});
cljs.reader.read_4_chars = (function read_4_chars(reader){return (new goog.string.StringBuffer(cljs.reader.read_char.call(null,reader),cljs.reader.read_char.call(null,reader),cljs.reader.read_char.call(null,reader),cljs.reader.read_char.call(null,reader))).toString();
});
cljs.reader.unicode_2_pattern = cljs.core.re_pattern.call(null,"^[0-9A-Fa-f]{2}$");
cljs.reader.unicode_4_pattern = cljs.core.re_pattern.call(null,"^[0-9A-Fa-f]{4}$");
cljs.reader.validate_unicode_escape = (function validate_unicode_escape(unicode_pattern,reader,escape_char,unicode_str){if(cljs.core.truth_(cljs.core.re_matches.call(null,unicode_pattern,unicode_str)))
{return unicode_str;
} else
{return cljs.reader.reader_error.call(null,reader,"Unexpected unicode escape \\",escape_char,unicode_str);
}
});
cljs.reader.make_unicode_char = (function make_unicode_char(code_str){var code = parseInt(code_str,16);return String.fromCharCode(code);
});
cljs.reader.escape_char = (function escape_char(buffer,reader){var ch = cljs.reader.read_char.call(null,reader);var mapresult = cljs.reader.escape_char_map.call(null,ch);if(cljs.core.truth_(mapresult))
{return mapresult;
} else
{if((ch === "x"))
{return cljs.reader.make_unicode_char.call(null,cljs.reader.validate_unicode_escape.call(null,cljs.reader.unicode_2_pattern,reader,ch,cljs.reader.read_2_chars.call(null,reader)));
} else
{if((ch === "u"))
{return cljs.reader.make_unicode_char.call(null,cljs.reader.validate_unicode_escape.call(null,cljs.reader.unicode_4_pattern,reader,ch,cljs.reader.read_4_chars.call(null,reader)));
} else
{if(cljs.reader.numeric_QMARK_.call(null,ch))
{return String.fromCharCode(ch);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.reader.reader_error.call(null,reader,"Unexpected unicode escape \\",ch);
} else
{return null;
}
}
}
}
}
});
/**
* Read until first character that doesn't match pred, returning
* char.
*/
cljs.reader.read_past = (function read_past(pred,rdr){var ch = cljs.reader.read_char.call(null,rdr);while(true){
if(cljs.core.truth_(pred.call(null,ch)))
{{
var G__26103 = cljs.reader.read_char.call(null,rdr);
ch = G__26103;
continue;
}
} else
{return ch;
}
break;
}
});
cljs.reader.read_delimited_list = (function read_delimited_list(delim,rdr,recursive_QMARK_){var a = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);while(true){
var ch = cljs.reader.read_past.call(null,cljs.reader.whitespace_QMARK_,rdr);if(cljs.core.truth_(ch))
{} else
{cljs.reader.reader_error.call(null,rdr,"EOF while reading");
}
if((delim === ch))
{return cljs.core.persistent_BANG_.call(null,a);
} else
{var temp__4124__auto__ = cljs.reader.macros.call(null,ch);if(cljs.core.truth_(temp__4124__auto__))
{var macrofn = temp__4124__auto__;var mret = macrofn.call(null,rdr,ch);{
var G__26104 = (((mret === rdr))?a:cljs.core.conj_BANG_.call(null,a,mret));
a = G__26104;
continue;
}
} else
{cljs.reader.unread.call(null,rdr,ch);
var o = cljs.reader.read.call(null,rdr,true,null,recursive_QMARK_);{
var G__26105 = (((o === rdr))?a:cljs.core.conj_BANG_.call(null,a,o));
a = G__26105;
continue;
}
}
}
break;
}
});
cljs.reader.not_implemented = (function not_implemented(rdr,ch){return cljs.reader.reader_error.call(null,rdr,"Reader for ",ch," not implemented yet");
});
cljs.reader.read_dispatch = (function read_dispatch(rdr,_){var ch = cljs.reader.read_char.call(null,rdr);var dm = cljs.reader.dispatch_macros.call(null,ch);if(cljs.core.truth_(dm))
{return dm.call(null,rdr,_);
} else
{var temp__4124__auto__ = cljs.reader.maybe_read_tagged_type.call(null,rdr,ch);if(cljs.core.truth_(temp__4124__auto__))
{var obj = temp__4124__auto__;return obj;
} else
{return cljs.reader.reader_error.call(null,rdr,"No dispatch macro for ",ch);
}
}
});
cljs.reader.read_unmatched_delimiter = (function read_unmatched_delimiter(rdr,ch){return cljs.reader.reader_error.call(null,rdr,"Unmached delimiter ",ch);
});
cljs.reader.read_list = (function read_list(rdr,_){return cljs.core.apply.call(null,cljs.core.list,cljs.reader.read_delimited_list.call(null,")",rdr,true));
});
cljs.reader.read_comment = cljs.reader.skip_line;
cljs.reader.read_vector = (function read_vector(rdr,_){return cljs.reader.read_delimited_list.call(null,"]",rdr,true);
});
cljs.reader.read_map = (function read_map(rdr,_){var l = cljs.reader.read_delimited_list.call(null,"}",rdr,true);if(cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,l)))
{cljs.reader.reader_error.call(null,rdr,"Map literal must contain an even number of forms");
} else
{}
return cljs.core.apply.call(null,cljs.core.hash_map,l);
});
cljs.reader.read_number = (function read_number(reader,initch){var buffer = (new goog.string.StringBuffer(initch));var ch = cljs.reader.read_char.call(null,reader);while(true){
if(cljs.core.truth_((function (){var or__8662__auto__ = (ch == null);if(or__8662__auto__)
{return or__8662__auto__;
} else
{var or__8662__auto____$1 = cljs.reader.whitespace_QMARK_.call(null,ch);if(or__8662__auto____$1)
{return or__8662__auto____$1;
} else
{return cljs.reader.macros.call(null,ch);
}
}
})()))
{cljs.reader.unread.call(null,reader,ch);
var s = buffer.toString();var or__8662__auto__ = cljs.reader.match_number.call(null,s);if(cljs.core.truth_(or__8662__auto__))
{return or__8662__auto__;
} else
{return cljs.reader.reader_error.call(null,reader,"Invalid number format [",s,"]");
}
} else
{{
var G__26106 = (function (){buffer.append(ch);
return buffer;
})();
var G__26107 = cljs.reader.read_char.call(null,reader);
buffer = G__26106;
ch = G__26107;
continue;
}
}
break;
}
});
cljs.reader.read_string_STAR_ = (function read_string_STAR_(reader,_){var buffer = (new goog.string.StringBuffer());var ch = cljs.reader.read_char.call(null,reader);while(true){
if((ch == null))
{return cljs.reader.reader_error.call(null,reader,"EOF while reading");
} else
{if(("\\" === ch))
{{
var G__26108 = (function (){buffer.append(cljs.reader.escape_char.call(null,buffer,reader));
return buffer;
})();
var G__26109 = cljs.reader.read_char.call(null,reader);
buffer = G__26108;
ch = G__26109;
continue;
}
} else
{if(("\"" === ch))
{return buffer.toString();
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{{
var G__26110 = (function (){buffer.append(ch);
return buffer;
})();
var G__26111 = cljs.reader.read_char.call(null,reader);
buffer = G__26110;
ch = G__26111;
continue;
}
} else
{return null;
}
}
}
}
break;
}
});
cljs.reader.special_symbols = (function special_symbols(t,not_found){if((t === "nil"))
{return null;
} else
{if((t === "true"))
{return true;
} else
{if((t === "false"))
{return false;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return not_found;
} else
{return null;
}
}
}
}
});
cljs.reader.read_symbol = (function read_symbol(reader,initch){var token = cljs.reader.read_token.call(null,reader,initch);if(cljs.core.truth_(goog.string.contains(token,"/")))
{return cljs.core.symbol.call(null,cljs.core.subs.call(null,token,0,token.indexOf("/")),cljs.core.subs.call(null,token,(token.indexOf("/") + 1),token.length));
} else
{return cljs.reader.special_symbols.call(null,token,cljs.core.symbol.call(null,token));
}
});
cljs.reader.read_keyword = (function read_keyword(reader,initch){var token = cljs.reader.read_token.call(null,reader,cljs.reader.read_char.call(null,reader));var a = cljs.reader.re_matches_STAR_.call(null,cljs.reader.symbol_pattern,token);var token__$1 = (a[0]);var ns = (a[1]);var name = (a[2]);if(((!((void 0 === ns))) && ((ns.substring((ns.length - 2),ns.length) === ":/"))) || (((name[(name.length - 1)]) === ":")) || (!((token__$1.indexOf("::",1) === -1))))
{return cljs.reader.reader_error.call(null,reader,"Invalid token: ",token__$1);
} else
{if((!((ns == null))) && ((ns.length > 0)))
{return cljs.core.keyword.call(null,ns.substring(0,ns.indexOf("/")),name);
} else
{return cljs.core.keyword.call(null,token__$1);
}
}
});
cljs.reader.desugar_meta = (function desugar_meta(f){if((f instanceof cljs.core.Symbol))
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",1014018828),f], null);
} else
{if(typeof f === 'string')
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",1014018828),f], null);
} else
{if((f instanceof cljs.core.Keyword))
{return new cljs.core.PersistentArrayMap.fromArray([f,true], true, false);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return f;
} else
{return null;
}
}
}
}
});
cljs.reader.wrapping_reader = (function wrapping_reader(sym){return (function (rdr,_){return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.reader.read.call(null,rdr,true,null,true)),sym);
});
});
cljs.reader.throwing_reader = (function throwing_reader(msg){return (function (rdr,_){return cljs.reader.reader_error.call(null,rdr,msg);
});
});
cljs.reader.read_meta = (function read_meta(rdr,_){var m = cljs.reader.desugar_meta.call(null,cljs.reader.read.call(null,rdr,true,null,true));if(cljs.core.map_QMARK_.call(null,m))
{} else
{cljs.reader.reader_error.call(null,rdr,"Metadata must be Symbol,Keyword,String or Map");
}
var o = cljs.reader.read.call(null,rdr,true,null,true);if((function (){var G__26113 = o;if(G__26113)
{var bit__9312__auto__ = (G__26113.cljs$lang$protocol_mask$partition0$ & 262144);if((bit__9312__auto__) || (G__26113.cljs$core$IWithMeta$))
{return true;
} else
{if((!G__26113.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWithMeta,G__26113);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWithMeta,G__26113);
}
})())
{return cljs.core.with_meta.call(null,o,cljs.core.merge.call(null,cljs.core.meta.call(null,o),m));
} else
{return cljs.reader.reader_error.call(null,rdr,"Metadata can only be applied to IWithMetas");
}
});
cljs.reader.read_set = (function read_set(rdr,_){return cljs.core.set.call(null,cljs.reader.read_delimited_list.call(null,"}",rdr,true));
});
cljs.reader.read_regex = (function read_regex(rdr,ch){return cljs.core.re_pattern.call(null,cljs.reader.read_string_STAR_.call(null,rdr,ch));
});
cljs.reader.read_discard = (function read_discard(rdr,_){cljs.reader.read.call(null,rdr,true,null,true);
return rdr;
});
cljs.reader.macros = (function macros(c){if((c === "\""))
{return cljs.reader.read_string_STAR_;
} else
{if((c === ":"))
{return cljs.reader.read_keyword;
} else
{if((c === ";"))
{return cljs.reader.read_comment;
} else
{if((c === "'"))
{return cljs.reader.wrapping_reader.call(null,new cljs.core.Symbol(null,"quote","quote",-1532577739,null));
} else
{if((c === "@"))
{return cljs.reader.wrapping_reader.call(null,new cljs.core.Symbol(null,"deref","deref",-1545057749,null));
} else
{if((c === "^"))
{return cljs.reader.read_meta;
} else
{if((c === "`"))
{return cljs.reader.not_implemented;
} else
{if((c === "~"))
{return cljs.reader.not_implemented;
} else
{if((c === "("))
{return cljs.reader.read_list;
} else
{if((c === ")"))
{return cljs.reader.read_unmatched_delimiter;
} else
{if((c === "["))
{return cljs.reader.read_vector;
} else
{if((c === "]"))
{return cljs.reader.read_unmatched_delimiter;
} else
{if((c === "{"))
{return cljs.reader.read_map;
} else
{if((c === "}"))
{return cljs.reader.read_unmatched_delimiter;
} else
{if((c === "\\"))
{return cljs.reader.read_char;
} else
{if((c === "#"))
{return cljs.reader.read_dispatch;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return null;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
cljs.reader.dispatch_macros = (function dispatch_macros(s){if((s === "{"))
{return cljs.reader.read_set;
} else
{if((s === "<"))
{return cljs.reader.throwing_reader.call(null,"Unreadable form");
} else
{if((s === "\""))
{return cljs.reader.read_regex;
} else
{if((s === "!"))
{return cljs.reader.read_comment;
} else
{if((s === "_"))
{return cljs.reader.read_discard;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return null;
} else
{return null;
}
}
}
}
}
}
});
/**
* Reads the first object from a PushbackReader. Returns the object read.
* If EOF, throws if eof-is-error is true. Otherwise returns sentinel.
*/
cljs.reader.read = (function read(reader,eof_is_error,sentinel,is_recursive){while(true){
var ch = cljs.reader.read_char.call(null,reader);if((ch == null))
{if(cljs.core.truth_(eof_is_error))
{return cljs.reader.reader_error.call(null,reader,"EOF while reading");
} else
{return sentinel;
}
} else
{if(cljs.reader.whitespace_QMARK_.call(null,ch))
{{
var G__26114 = reader;
var G__26115 = eof_is_error;
var G__26116 = sentinel;
var G__26117 = is_recursive;
reader = G__26114;
eof_is_error = G__26115;
sentinel = G__26116;
is_recursive = G__26117;
continue;
}
} else
{if(cljs.reader.comment_prefix_QMARK_.call(null,ch))
{{
var G__26118 = cljs.reader.read_comment.call(null,reader,ch);
var G__26119 = eof_is_error;
var G__26120 = sentinel;
var G__26121 = is_recursive;
reader = G__26118;
eof_is_error = G__26119;
sentinel = G__26120;
is_recursive = G__26121;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var f = cljs.reader.macros.call(null,ch);var res = (cljs.core.truth_(f)?f.call(null,reader,ch):((cljs.reader.number_literal_QMARK_.call(null,reader,ch))?cljs.reader.read_number.call(null,reader,ch):((new cljs.core.Keyword(null,"else","else",1017020587))?cljs.reader.read_symbol.call(null,reader,ch):null)));if((res === reader))
{{
var G__26122 = reader;
var G__26123 = eof_is_error;
var G__26124 = sentinel;
var G__26125 = is_recursive;
reader = G__26122;
eof_is_error = G__26123;
sentinel = G__26124;
is_recursive = G__26125;
continue;
}
} else
{return res;
}
} else
{return null;
}
}
}
}
break;
}
});
/**
* Reads one object from the string s
*/
cljs.reader.read_string = (function read_string(s){var r = cljs.reader.push_back_reader.call(null,s);return cljs.reader.read.call(null,r,false,null,false);
});
cljs.reader.zero_fill_right_and_truncate = (function zero_fill_right_and_truncate(s,width){if(cljs.core._EQ_.call(null,width,cljs.core.count.call(null,s)))
{return s;
} else
{if((width < cljs.core.count.call(null,s)))
{return cljs.core.subs.call(null,s,0,width);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var b = (new goog.string.StringBuffer(s));while(true){
if((b.getLength() < width))
{{
var G__26126 = b.append("0");
b = G__26126;
continue;
}
} else
{return b.toString();
}
break;
}
} else
{return null;
}
}
}
});
cljs.reader.divisible_QMARK_ = (function divisible_QMARK_(num,div){return (cljs.core.mod.call(null,num,div) === 0);
});
cljs.reader.indivisible_QMARK_ = (function indivisible_QMARK_(num,div){return !(cljs.reader.divisible_QMARK_.call(null,num,div));
});
cljs.reader.leap_year_QMARK_ = (function leap_year_QMARK_(year){return (cljs.reader.divisible_QMARK_.call(null,year,4)) && ((cljs.reader.indivisible_QMARK_.call(null,year,100)) || (cljs.reader.divisible_QMARK_.call(null,year,400)));
});
cljs.reader.days_in_month = (function (){var dim_norm = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,31,28,31,30,31,30,31,31,30,31,30,31], null);var dim_leap = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,31,29,31,30,31,30,31,31,30,31,30,31], null);return ((function (dim_norm,dim_leap){
return (function (month,leap_year_QMARK_){return cljs.core.get.call(null,(cljs.core.truth_(leap_year_QMARK_)?dim_leap:dim_norm),month);
});
;})(dim_norm,dim_leap))
})();
cljs.reader.timestamp_regex = /(\d\d\d\d)(?:-(\d\d)(?:-(\d\d)(?:[T](\d\d)(?::(\d\d)(?::(\d\d)(?:[.](\d+))?)?)?)?)?)?(?:[Z]|([-+])(\d\d):(\d\d))?/;
cljs.reader.parse_int = (function parse_int(s){var n = parseInt(s,10);if(cljs.core.not.call(null,isNaN(n)))
{return n;
} else
{return null;
}
});
cljs.reader.check = (function check(low,n,high,msg){if(((low <= n)) && ((n <= high)))
{} else
{cljs.reader.reader_error.call(null,null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)+" Failed:  "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(low)+"<="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)+"<="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(high)));
}
return n;
});
cljs.reader.parse_and_validate_timestamp = (function parse_and_validate_timestamp(s){var vec__26128 = cljs.core.re_matches.call(null,cljs.reader.timestamp_regex,s);var _ = cljs.core.nth.call(null,vec__26128,0,null);var years = cljs.core.nth.call(null,vec__26128,1,null);var months = cljs.core.nth.call(null,vec__26128,2,null);var days = cljs.core.nth.call(null,vec__26128,3,null);var hours = cljs.core.nth.call(null,vec__26128,4,null);var minutes = cljs.core.nth.call(null,vec__26128,5,null);var seconds = cljs.core.nth.call(null,vec__26128,6,null);var fraction = cljs.core.nth.call(null,vec__26128,7,null);var offset_sign = cljs.core.nth.call(null,vec__26128,8,null);var offset_hours = cljs.core.nth.call(null,vec__26128,9,null);var offset_minutes = cljs.core.nth.call(null,vec__26128,10,null);var v = vec__26128;if(cljs.core.not.call(null,v))
{return cljs.reader.reader_error.call(null,null,("Unrecognized date/time syntax: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)));
} else
{var years__$1 = cljs.reader.parse_int.call(null,years);var months__$1 = (function (){var or__8662__auto__ = cljs.reader.parse_int.call(null,months);if(cljs.core.truth_(or__8662__auto__))
{return or__8662__auto__;
} else
{return 1;
}
})();var days__$1 = (function (){var or__8662__auto__ = cljs.reader.parse_int.call(null,days);if(cljs.core.truth_(or__8662__auto__))
{return or__8662__auto__;
} else
{return 1;
}
})();var hours__$1 = (function (){var or__8662__auto__ = cljs.reader.parse_int.call(null,hours);if(cljs.core.truth_(or__8662__auto__))
{return or__8662__auto__;
} else
{return 0;
}
})();var minutes__$1 = (function (){var or__8662__auto__ = cljs.reader.parse_int.call(null,minutes);if(cljs.core.truth_(or__8662__auto__))
{return or__8662__auto__;
} else
{return 0;
}
})();var seconds__$1 = (function (){var or__8662__auto__ = cljs.reader.parse_int.call(null,seconds);if(cljs.core.truth_(or__8662__auto__))
{return or__8662__auto__;
} else
{return 0;
}
})();var fraction__$1 = (function (){var or__8662__auto__ = cljs.reader.parse_int.call(null,cljs.reader.zero_fill_right_and_truncate.call(null,fraction,3));if(cljs.core.truth_(or__8662__auto__))
{return or__8662__auto__;
} else
{return 0;
}
})();var offset_sign__$1 = ((cljs.core._EQ_.call(null,offset_sign,"-"))?-1:1);var offset_hours__$1 = (function (){var or__8662__auto__ = cljs.reader.parse_int.call(null,offset_hours);if(cljs.core.truth_(or__8662__auto__))
{return or__8662__auto__;
} else
{return 0;
}
})();var offset_minutes__$1 = (function (){var or__8662__auto__ = cljs.reader.parse_int.call(null,offset_minutes);if(cljs.core.truth_(or__8662__auto__))
{return or__8662__auto__;
} else
{return 0;
}
})();var offset = (offset_sign__$1 * ((offset_hours__$1 * 60) + offset_minutes__$1));return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [years__$1,cljs.reader.check.call(null,1,months__$1,12,"timestamp month field must be in range 1..12"),cljs.reader.check.call(null,1,days__$1,cljs.reader.days_in_month.call(null,months__$1,cljs.reader.leap_year_QMARK_.call(null,years__$1)),"timestamp day field must be in range 1..last day in month"),cljs.reader.check.call(null,0,hours__$1,23,"timestamp hour field must be in range 0..23"),cljs.reader.check.call(null,0,minutes__$1,59,"timestamp minute field must be in range 0..59"),cljs.reader.check.call(null,0,seconds__$1,((cljs.core._EQ_.call(null,minutes__$1,59))?60:59),"timestamp second field must be in range 0..60"),cljs.reader.check.call(null,0,fraction__$1,999,"timestamp millisecond field must be in range 0..999"),offset], null);
}
});
cljs.reader.parse_timestamp = (function parse_timestamp(ts){var temp__4124__auto__ = cljs.reader.parse_and_validate_timestamp.call(null,ts);if(cljs.core.truth_(temp__4124__auto__))
{var vec__26130 = temp__4124__auto__;var years = cljs.core.nth.call(null,vec__26130,0,null);var months = cljs.core.nth.call(null,vec__26130,1,null);var days = cljs.core.nth.call(null,vec__26130,2,null);var hours = cljs.core.nth.call(null,vec__26130,3,null);var minutes = cljs.core.nth.call(null,vec__26130,4,null);var seconds = cljs.core.nth.call(null,vec__26130,5,null);var ms = cljs.core.nth.call(null,vec__26130,6,null);var offset = cljs.core.nth.call(null,vec__26130,7,null);return (new Date((Date.UTC(years,(months - 1),days,hours,minutes,seconds,ms) - ((offset * 60) * 1000))));
} else
{return cljs.reader.reader_error.call(null,null,("Unrecognized date/time syntax: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ts)));
}
});
cljs.reader.read_date = (function read_date(s){if(typeof s === 'string')
{return cljs.reader.parse_timestamp.call(null,s);
} else
{return cljs.reader.reader_error.call(null,null,"Instance literal expects a string for its timestamp.");
}
});
cljs.reader.read_queue = (function read_queue(elems){if(cljs.core.vector_QMARK_.call(null,elems))
{return cljs.core.into.call(null,cljs.core.PersistentQueue.EMPTY,elems);
} else
{return cljs.reader.reader_error.call(null,null,"Queue literal expects a vector for its elements.");
}
});
cljs.reader.read_js = (function read_js(form){if(cljs.core.vector_QMARK_.call(null,form))
{var arr = [];var seq__26143_26155 = cljs.core.seq.call(null,form);var chunk__26144_26156 = null;var count__26145_26157 = 0;var i__26146_26158 = 0;while(true){
if((i__26146_26158 < count__26145_26157))
{var x_26159 = cljs.core._nth.call(null,chunk__26144_26156,i__26146_26158);arr.push(x_26159);
{
var G__26160 = seq__26143_26155;
var G__26161 = chunk__26144_26156;
var G__26162 = count__26145_26157;
var G__26163 = (i__26146_26158 + 1);
seq__26143_26155 = G__26160;
chunk__26144_26156 = G__26161;
count__26145_26157 = G__26162;
i__26146_26158 = G__26163;
continue;
}
} else
{var temp__4126__auto___26164 = cljs.core.seq.call(null,seq__26143_26155);if(temp__4126__auto___26164)
{var seq__26143_26165__$1 = temp__4126__auto___26164;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26143_26165__$1))
{var c__9418__auto___26166 = cljs.core.chunk_first.call(null,seq__26143_26165__$1);{
var G__26167 = cljs.core.chunk_rest.call(null,seq__26143_26165__$1);
var G__26168 = c__9418__auto___26166;
var G__26169 = cljs.core.count.call(null,c__9418__auto___26166);
var G__26170 = 0;
seq__26143_26155 = G__26167;
chunk__26144_26156 = G__26168;
count__26145_26157 = G__26169;
i__26146_26158 = G__26170;
continue;
}
} else
{var x_26171 = cljs.core.first.call(null,seq__26143_26165__$1);arr.push(x_26171);
{
var G__26172 = cljs.core.next.call(null,seq__26143_26165__$1);
var G__26173 = null;
var G__26174 = 0;
var G__26175 = 0;
seq__26143_26155 = G__26172;
chunk__26144_26156 = G__26173;
count__26145_26157 = G__26174;
i__26146_26158 = G__26175;
continue;
}
}
} else
{}
}
break;
}
return arr;
} else
{if(cljs.core.map_QMARK_.call(null,form))
{var obj = (function (){var obj26148 = {};return obj26148;
})();var seq__26149_26176 = cljs.core.seq.call(null,form);var chunk__26150_26177 = null;var count__26151_26178 = 0;var i__26152_26179 = 0;while(true){
if((i__26152_26179 < count__26151_26178))
{var vec__26153_26180 = cljs.core._nth.call(null,chunk__26150_26177,i__26152_26179);var k_26181 = cljs.core.nth.call(null,vec__26153_26180,0,null);var v_26182 = cljs.core.nth.call(null,vec__26153_26180,1,null);(obj[cljs.core.name.call(null,k_26181)] = v_26182);
{
var G__26183 = seq__26149_26176;
var G__26184 = chunk__26150_26177;
var G__26185 = count__26151_26178;
var G__26186 = (i__26152_26179 + 1);
seq__26149_26176 = G__26183;
chunk__26150_26177 = G__26184;
count__26151_26178 = G__26185;
i__26152_26179 = G__26186;
continue;
}
} else
{var temp__4126__auto___26187 = cljs.core.seq.call(null,seq__26149_26176);if(temp__4126__auto___26187)
{var seq__26149_26188__$1 = temp__4126__auto___26187;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26149_26188__$1))
{var c__9418__auto___26189 = cljs.core.chunk_first.call(null,seq__26149_26188__$1);{
var G__26190 = cljs.core.chunk_rest.call(null,seq__26149_26188__$1);
var G__26191 = c__9418__auto___26189;
var G__26192 = cljs.core.count.call(null,c__9418__auto___26189);
var G__26193 = 0;
seq__26149_26176 = G__26190;
chunk__26150_26177 = G__26191;
count__26151_26178 = G__26192;
i__26152_26179 = G__26193;
continue;
}
} else
{var vec__26154_26194 = cljs.core.first.call(null,seq__26149_26188__$1);var k_26195 = cljs.core.nth.call(null,vec__26154_26194,0,null);var v_26196 = cljs.core.nth.call(null,vec__26154_26194,1,null);(obj[cljs.core.name.call(null,k_26195)] = v_26196);
{
var G__26197 = cljs.core.next.call(null,seq__26149_26188__$1);
var G__26198 = null;
var G__26199 = 0;
var G__26200 = 0;
seq__26149_26176 = G__26197;
chunk__26150_26177 = G__26198;
count__26151_26178 = G__26199;
i__26152_26179 = G__26200;
continue;
}
}
} else
{}
}
break;
}
return obj;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.reader.reader_error.call(null,null,("JS literal expects a vector or map containing only string or unqualified keyword keys"));
} else
{return null;
}
}
}
});
cljs.reader.read_uuid = (function read_uuid(uuid){if(typeof uuid === 'string')
{return (new cljs.core.UUID(uuid));
} else
{return cljs.reader.reader_error.call(null,null,"UUID literal expects a string as its representation.");
}
});
cljs.reader._STAR_tag_table_STAR_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, ["inst",cljs.reader.read_date,"uuid",cljs.reader.read_uuid,"queue",cljs.reader.read_queue,"js",cljs.reader.read_js], null));
cljs.reader._STAR_default_data_reader_fn_STAR_ = cljs.core.atom.call(null,null);
cljs.reader.maybe_read_tagged_type = (function maybe_read_tagged_type(rdr,initch){var tag = cljs.reader.read_symbol.call(null,rdr,initch);var pfn = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)));var dfn = cljs.core.deref.call(null,cljs.reader._STAR_default_data_reader_fn_STAR_);if(cljs.core.truth_(pfn))
{return pfn.call(null,cljs.reader.read.call(null,rdr,true,null,false));
} else
{if(cljs.core.truth_(dfn))
{return dfn.call(null,tag,cljs.reader.read.call(null,rdr,true,null,false));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.reader.reader_error.call(null,rdr,"Could not find tag parser for ",(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag))," in ",cljs.core.pr_str.call(null,cljs.core.keys.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_))));
} else
{return null;
}
}
}
});
cljs.reader.register_tag_parser_BANG_ = (function register_tag_parser_BANG_(tag,f){var tag__$1 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag));var old_parser = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),tag__$1);cljs.core.swap_BANG_.call(null,cljs.reader._STAR_tag_table_STAR_,cljs.core.assoc,tag__$1,f);
return old_parser;
});
cljs.reader.deregister_tag_parser_BANG_ = (function deregister_tag_parser_BANG_(tag){var tag__$1 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag));var old_parser = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),tag__$1);cljs.core.swap_BANG_.call(null,cljs.reader._STAR_tag_table_STAR_,cljs.core.dissoc,tag__$1);
return old_parser;
});
cljs.reader.register_default_tag_parser_BANG_ = (function register_default_tag_parser_BANG_(f){var old_parser = cljs.core.deref.call(null,cljs.reader._STAR_default_data_reader_fn_STAR_);cljs.core.swap_BANG_.call(null,cljs.reader._STAR_default_data_reader_fn_STAR_,((function (old_parser){
return (function (_){return f;
});})(old_parser))
);
return old_parser;
});
cljs.reader.deregister_default_tag_parser_BANG_ = (function deregister_default_tag_parser_BANG_(){var old_parser = cljs.core.deref.call(null,cljs.reader._STAR_default_data_reader_fn_STAR_);cljs.core.swap_BANG_.call(null,cljs.reader._STAR_default_data_reader_fn_STAR_,((function (old_parser){
return (function (_){return null;
});})(old_parser))
);
return old_parser;
});
