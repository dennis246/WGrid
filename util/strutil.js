function startsWith(content, sequence) {

    var mainArr = Array.from(content);
    var seqArr = Array.from(sequence);
    var matchedLen = 0;

    for (var j = 0; j < seqArr.length; j++) {

        if (j === mainArr.length) {
            break;
        }

        if (mainArr[j] === seqArr[j]) {
            ++matchedLen;
        } else if (j > 0 && matchedLen === 0) {
            break;
        }

        if (matchedLen >= seqArr.length) {
            return 1;
        }
    }

    if (matchedLen >= seqArr.length) {
        return 1;
    }


    return 0;


}




function checkPartialMatch(firstArr, secondArr, ignoreCase) {
    if (ignoreCase != 1 && ignoreCase != 0) {
        ignoreCase = 0;
    }

    var interArr = [];
    if (secondArr.length > firstArr.length) {
        interArr = firstArr;
        firstArr = secondArr;
        secondArr = interArr;
    }

    //utilInfo = new LinkedHashMap<>();
    var matchedStartPt = -1;
    var matchedEndPt = -1;
    var ri = 0;
    var ip = 0;
    var hasCount = 0;
    var eof = 0;
    if (firstArr.length >= secondArr.length) {
        for (var i = 0; i < secondArr.length; i++, ri++) {

            for (var j = 0; j < firstArr.length; j++) {

                if ((ignoreCase === 1
                    && secondArr[i].toLowerCase() === firstArr[j].toLowerCase())
                    ||
                    (ignoreCase === 0 && secondArr[i] === firstArr[j])) {
                    if (matchedStartPt === -1) {
                        matchedStartPt = j;
                    }

                    hasCount += 1;
                    i++;
                    ip++;

                    if (hasCount === secondArr.length) {
                        matchedEndPt = i;
                        eof = 1;
                        break;
                    }

                    if (i === secondArr.length) {
                        break;
                    }

                } else {
                    matchedStartPt = -1;
                    matchedEndPt = -1;
                    hasCount = 0;
                    i = i - ip;
                    ip = 0;
                }

            }

            if (eof === 1) {
                break;
            }

        }

        // utilInfo.put("matchedStartPt", matchedStartPt);
        // utilInfo.put("matchedEndPt", matchedEndPt);
        // utilInfo.put("matchedCount", hasCount);
        // utilInfo.put("runningIndex", ri);

        if (hasCount === secondArr.length) {
            return 1;
        } else {
            return 0;
        }

    } else {
        throw new Exception("unimpl method for haschars");
    }

}


function unravelArray(currObj) {

    if (currObj instanceof Array || currObj instanceof HTMLCollection) {

        if (currObj.length === 0) {
            return 0;
        } else {

            if (currObj instanceof HTMLCollection) {
                currObj = Array.of(currObj);
            }

            for (var i = 0; i < currObj.length; i++) {

                unravelArray(currObj[i]);

            }
        }

    } else {
        console.log("unravArr::", currObj);
    }

}
