SUBDIRS := $(wildcard */.)

all: install global

install:
	for dir in $(SUBDIRS); do if [ ! -L $$dir ] && [ -d $$dir ]; then $(MAKE) -C $$dir"/."; fi done
	
global: global-models global-processes

global-models:
	echo "" > all.models.js;
	for dir in $(SUBDIRS); do if [ ! -L $$dir ] && [ -d $$dir ]; then cat $$dir/models.js >> all.models.js; fi done

global-processes:
	echo "" > all.processes.js;
	for dir in $(SUBDIRS); do if [ ! -L $$dir ] && [ -d $$dir ]; then cat $$dir/processes.js >> all.processes.js; fi done

clean:
	rm -f all.processes.js all.models.js;
	for dir in $(SUBDIRS); do if [ ! -L $$dir ] && [ -d $$dir ]; then $(MAKE) -C $$dir clean; fi done

.PHONY: install global global-processes global-models clean
