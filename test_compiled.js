if(!lt.util.load.provided_QMARK_('lt.plugins.lt-test')) {
goog.provide('lt.plugins.lt_test');
goog.require('cljs.core');
goog.require('lt.objs.plugins');
goog.require('lt.util.dom');
goog.require('lt.objs.tabs');
goog.require('lt.util.dom');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.objs.plugins');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.tabs');
goog.require('lt.objs.editor');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
lt.plugins.lt_test.tests = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
lt.plugins.lt_test.clear_BANG_ = (function clear_BANG_(){return cljs.core.swap_BANG_.call(null,lt.plugins.lt_test.tests,(function (x){return cljs.core.PersistentArrayMap.EMPTY;
}));
});
lt.plugins.lt_test.deftest = (function deftest(name,form){cljs.core.swap_BANG_.call(null,lt.plugins.lt_test.tests,(function (p1__8256_SHARP_){return cljs.core.assoc.call(null,p1__8256_SHARP_,name,form);
}));
return form;
});
lt.plugins.lt_test.is = (function is(form){return form;
});
lt.plugins.lt_test.is_EQ_ = (function is_EQ_(a,b){if(cljs.core._EQ_.call(null,a,b))
{return true;
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}
});
lt.plugins.lt_test.failures = (function failures(){var res = cljs.core.filter.call(null,(function (p__8260){var vec__8261 = p__8260;var k = cljs.core.nth.call(null,vec__8261,0,null);var v = cljs.core.nth.call(null,vec__8261,1,null);return cljs.core.not_EQ_.call(null,v,true);
}),cljs.core.deref.call(null,lt.plugins.lt_test.tests));if((cljs.core.count.call(null,res) > 0))
{cljs.core.println.call(null,"Failures:");
} else
{cljs.core.println.call(null,"Success!");
}
cljs.core.count.call(null,cljs.core.map.call(null,(function (p1__8257_SHARP_){return cljs.core.println.call(null,p1__8257_SHARP_);
}),res));
return res;
});
cljs.core.list(new cljs.core.Symbol(null,"deftest-ed","deftest-ed",-1730828850,null),"thing",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ed","ed",-1640528296,null)], null),cljs.core.list(new cljs.core.Symbol(null,"is=","is=",-1640426996,null),2,3));
}
if(!lt.util.load.provided_QMARK_('lt.plugins.lt-test.behavior')) {
goog.provide('lt.plugins.lt_test.behavior');
goog.require('cljs.core');
goog.require('lt.objs.plugins');
goog.require('lt.util.dom');
goog.require('lt.objs.tabs');
goog.require('lt.util.dom');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.objs.plugins');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.tabs');
goog.require('lt.objs.editor');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
lt.plugins.lt_test.behavior.behavior_logs = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
lt.plugins.lt_test.behavior.add_behavior_log_BANG_ = (function add_behavior_log_BANG_(name){return cljs.core.swap_BANG_.call(null,lt.plugins.lt_test.behavior.behavior_logs,cljs.core.concat,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name], null));
});
lt.plugins.lt_test.behavior.clear_behavior_logs_BANG_ = (function clear_behavior_logs_BANG_(){return cljs.core.swap_BANG_.call(null,lt.plugins.lt_test.behavior.behavior_logs,(function (x){return cljs.core.PersistentVector.EMPTY;
}));
});
lt.plugins.lt_test.behavior.get_behavior_logs = (function get_behavior_logs(){return cljs.core.deref.call(null,lt.plugins.lt_test.behavior.behavior_logs);
});
lt.plugins.lt_test.behavior.make_logged_behavior_BANG_ = (function make_logged_behavior_BANG_(name){var b = cljs.core.deref.call(null,lt.object.behaviors).call(null,name);var reaction = new cljs.core.Keyword(null,"reaction","reaction",4441361819).cljs$core$IFn$_invoke$arity$1(b);var logged_reaction = ((function (b,reaction){
return (function() { 
var G__8334__delegate = function (rest){lt.plugins.lt_test.behavior.add_behavior_log_BANG_.call(null,name);
return cljs.core.apply.call(null,reaction,rest);
};
var G__8334 = function (var_args){
var rest = null;if (arguments.length > 0) {
  rest = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__8334__delegate.call(this,rest);};
G__8334.cljs$lang$maxFixedArity = 0;
G__8334.cljs$lang$applyTo = (function (arglist__8335){
var rest = cljs.core.seq(arglist__8335);
return G__8334__delegate(rest);
});
G__8334.cljs$core$IFn$_invoke$arity$variadic = G__8334__delegate;
return G__8334;
})()
;})(b,reaction))
;var logged_behavior = cljs.core.assoc.call(null,b,new cljs.core.Keyword(null,"unlogged-reaction","unlogged-reaction",4108859853),reaction,new cljs.core.Keyword(null,"reaction","reaction",4441361819),logged_reaction,new cljs.core.Keyword(null,"logged-reaction","logged-reaction",714632582),true);if(cljs.core.not.call(null,new cljs.core.Keyword(null,"logged-reaction","logged-reaction",714632582).cljs$core$IFn$_invoke$arity$1(b)))
{return cljs.core.swap_BANG_.call(null,lt.object.behaviors,(function (p1__8324_SHARP_){return cljs.core.assoc.call(null,p1__8324_SHARP_,name,logged_behavior);
}));
} else
{return null;
}
});
lt.plugins.lt_test.behavior.setup_logged_behaviors_BANG_ = (function setup_logged_behaviors_BANG_(plugin){var all = cljs.core.keys.call(null,cljs.core.deref.call(null,lt.object.behaviors));var mine = cljs.core.filter.call(null,((function (all){
return (function (p1__8325_SHARP_){return lt.plugins.lt_test.behavior.part_of_plugin_QMARK_.call(null,p1__8325_SHARP_,plugin);
});})(all))
,all);var iter__7504__auto__ = (function iter__8330(s__8331){return (new cljs.core.LazySeq(null,(function (){var s__8331__$1 = s__8331;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__8331__$1);if(temp__4092__auto__)
{var s__8331__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8331__$2))
{var c__7502__auto__ = cljs.core.chunk_first.call(null,s__8331__$2);var size__7503__auto__ = cljs.core.count.call(null,c__7502__auto__);var b__8333 = cljs.core.chunk_buffer.call(null,size__7503__auto__);if((function (){var i__8332 = 0;while(true){
if((i__8332 < size__7503__auto__))
{var k = cljs.core._nth.call(null,c__7502__auto__,i__8332);cljs.core.chunk_append.call(null,b__8333,lt.plugins.lt_test.behavior.make_logged_behavior_BANG_.call(null,k));
{
var G__8336 = (i__8332 + 1);
i__8332 = G__8336;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8333),iter__8330.call(null,cljs.core.chunk_rest.call(null,s__8331__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8333),null);
}
} else
{var k = cljs.core.first.call(null,s__8331__$2);return cljs.core.cons.call(null,lt.plugins.lt_test.behavior.make_logged_behavior_BANG_.call(null,k),iter__8330.call(null,cljs.core.rest.call(null,s__8331__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7504__auto__.call(null,mine);
});
lt.plugins.lt_test.behavior.part_of_plugin_QMARK_ = (function part_of_plugin_QMARK_(name,plugin){if(cljs.core.truth_(cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,plugin),name)))
{return true;
} else
{return false;
}
});
}

//# sourceMappingURL=test_compiled.js.map