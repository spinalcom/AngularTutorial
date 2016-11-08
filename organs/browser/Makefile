SUBDIRS := $(wildcard *)
HTML := $(wildcard *.html)

all:
	for dir in $(SUBDIRS); do if [ ! -L $$dir ] && [ -d $$dir ]; then $(MAKE) -C $$dir"/."; fi done

clean:
	for file in $(HTML); do $(RM) $$file; done
	for dir in $(SUBDIRS); do if [ ! -L $$dir ] && [ -d $$dir ]; then $(MAKE) -C $$dir clean; fi done
	
.PHONY: all run stop clean
