#!/bin/sh
# By 9vlc

c_teg="teg/teg.awk"

if [ ! -e "$c_teg" ]; then
        >&2 echo "teg not executable / not found in '$c_teg'!"
        exit 1
fi

if [ -d out ]; then
        rm -r out
fi

if [ ! "$(find src -type f -name '*.teg')" ]; then
        >&2 echo "No teg files found!"
fi

# copy over sources to output
cp -a src out

# remove all .teg files from output
find out -type f -name '*.teg' -delete
find out -type f -name '*.teg.inc' -delete

# process all teg files from src
find src -type f -name '*.teg' | while IFS= read -r file; do
        # Format the output file name
        outfile="${file%teg}html"
        outfile="out${outfile#src}"

        echo "$file -> $outfile"
        if ! "$c_teg" "$file" > "$outfile"; then
                >&2 echo "Failed to process $file"
        fi
done
